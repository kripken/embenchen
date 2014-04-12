
var jobs = [
  { title: 'micro-benchmarks' },
  { benchmark: 'copy' },
  { benchmark: 'corrections' },
  { benchmark: 'fannkuch' },
  { benchmark: 'fasta' },
  { benchmark: 'memops' },
  { benchmark: 'primes' },
  { benchmark: 'skinning' },

  { title: 'macro-benchmarks' },
  { benchmark: 'box2d' },
  { benchmark: 'bullet' },
  { benchmark: 'lua_binarytrees' },
  { benchmark: 'zlib' },
];

var ran = false;
function run() {
  if (ran) return;
  ran = true;

  document.getElementById('results_area').hidden = false;

  var tableBody = document.getElementById('table_body');
  tableBody.innerHTML = '';

  var theButton = document.getElementById('the_button');
  theButton.innerHTML = 'Running benchmarks... (this can take a while)';
  theButton.classList.remove('btn-primary');
  theButton.classList.add('btn-warning');

  var curr = 0;

  function runJob() {

    var job = jobs[curr++];
    if (!job) {
      theButton.classList.remove('btn-warning');
      theButton.classList.add('btn-success');
      theButton.innerHTML = 'Finished running benchmarks.';
      return;
    }

    if (job.title) {
      tableBody.innerHTML += '<tr>' +
                             '  <td style="background-color:#ddd">' + job.title + '</td>' +
                             '  <td style="background-color:#ddd"></td>' +
                             '  <td style="background-color:#ddd"></td>' +
                             '</tr>';
      setTimeout(runJob, 1);
      return;
    }

    job.scale = job.scale || 'ms (lower numbers are better)';

    tableBody.innerHTML += '<tr>' +
                           '  <td>' + job.benchmark + '</td>' +
                           '  <td id="' + job.benchmark + '-cell"><div id="' + job.benchmark + '-output" class="text-center"></div></td>' +
                           '  <td>' + job.scale + '</td>' +
                           '  <!--td id="' + job.benchmark + '-normalized-cell"><div id="' + job.benchmark + '-normalized-output" class="text-center"></div></td-->' +
                           '</tr>';

    document.getElementById(job.benchmark + '-output').innerHTML = '<b>(..running..)</b>';
    document.getElementById(job.benchmark + '-cell').style = 'background-color: #ffddaa';

    // Run the job the specified number of times
    var reps = 0;
    var totalReps = 1;
    var results = [];

    function finish() {
      console.log('final: ' + JSON.stringify(results));
      var final = {};
      for (var i = 0; i < totalReps; i++) {
        var result = results[i];
        for (var k in result) {
          if (typeof result[k] === 'number') {
            final[k] = (final[k] || 0) + result[k];
          }
        }
      }
      for (var k in final) {
        if (typeof final[k] === 'number') {
          final[k] /= totalReps;
        }
      }
      job.msg = final;
      console.log('final: ' + JSON.stringify(job.msg) + ' on ' + totalReps);
      var raw = Math.round(job.msg.runtime);

      document.getElementById(job.benchmark + '-output').innerHTML = '<b>' + raw + '</b>';
      document.getElementById(job.benchmark + '-cell').style = 'background-color: #bbccff';
      //document.getElementById(job.benchmark + '-normalized-output').innerHTML = '<b>' + (raw/job.normalized).toFixed(3) + '</b>';
      //document.getElementById(job.benchmark + '-normalized-cell').style = 'background-color: #ee9955';
      setTimeout(runJob, 1);
    }

    function doRep() {
      var worker = new Worker('worker.js');
      worker.onmessage = function(event) {
        var msg = event.data;
        console.log(JSON.stringify(msg));
        if (msg.benchmark != job.benchmark) throw 'invalid data from benchmark worker';
        results.push(msg);

        reps++;
        if (reps === totalReps) {
          worker.terminate(); // ensure the worker is cleaned up before the next starts
          finish();
        } else {
          setTimeout(doRep, 1);
        }
      };
      console.log('requesting benchmark ' + job.benchmark);
      worker.postMessage({
        benchmark: job.benchmark,
      });
    }

    doRep();
  }
  runJob();
}

