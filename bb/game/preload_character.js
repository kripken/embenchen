
var Module = typeof Module !== 'undefined' ? Module : {};

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'character.data';
    var REMOTE_PACKAGE_BASE = 'character.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
  
    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onerror = function(event) {
        throw new Error("NetworkError for: " + packageName);
      }
      xhr.onload = function(event) {
        if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
          var packageData = xhr.response;
          callback(packageData);
        } else {
          throw new Error(xhr.statusText + " : " + xhr.responseURL);
        }
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetchedCallback = null;
      var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

      if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', 'packages', true, true);
Module['FS_createPath']('/packages', 'models', true, true);
Module['FS_createPath']('/packages/models', 'vwep', true, true);
Module['FS_createPath']('/packages/models/vwep', 'shotg', true, true);
Module['FS_createPath']('/packages/models/vwep', 'chaing', true, true);
Module['FS_createPath']('/packages/models/vwep', 'gl', true, true);
Module['FS_createPath']('/packages/models/vwep', 'rifle', true, true);
Module['FS_createPath']('/packages/models/vwep', 'rocket', true, true);
Module['FS_createPath']('/packages/models', 'snoutx10k', true, true);
Module['FS_createPath']('/packages/models/snoutx10k', 'hudguns', true, true);
Module['FS_createPath']('/packages/models/snoutx10k/hudguns', 'shotg', true, true);
Module['FS_createPath']('/packages/models/snoutx10k/hudguns', 'chaing', true, true);
Module['FS_createPath']('/packages/models/snoutx10k/hudguns', 'gl', true, true);
Module['FS_createPath']('/packages/models/snoutx10k/hudguns', 'rifle', true, true);
Module['FS_createPath']('/packages/models/snoutx10k/hudguns', 'rocket', true, true);
Module['FS_createPath']('/packages/models', 'hudguns', true, true);
Module['FS_createPath']('/packages/models/hudguns', 'shotg', true, true);
Module['FS_createPath']('/packages/models/hudguns', 'chaing', true, true);
Module['FS_createPath']('/packages/models/hudguns', 'gl', true, true);
Module['FS_createPath']('/packages/models/hudguns', 'rifle', true, true);
Module['FS_createPath']('/packages/models/hudguns', 'rocket', true, true);

    function DataRequest(start, end, audio) {
      this.start = start;
      this.end = end;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);
        this.finish(byteArray);
      },
      finish: function(byteArray) {
        var that = this;

        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            err('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change

        this.requests[this.name] = null;
      }
    };

        var files = metadata.files;
        for (var i = 0; i < files.length; ++i) {
          new DataRequest(files[i].start, files[i].end, files[i].audio).open('GET', files[i].filename);
        }

  
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        if (Module['SPLIT_MEMORY']) err('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting');
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
  
          var files = metadata.files;
          for (var i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }
              Module['removeRunDependency']('datafile_character.data');

    };
    Module['addRunDependency']('datafile_character.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage({"files": [{"start": 0, "audio": 0, "end": 94, "filename": "/packages/models/vwep/readme.txt"}, {"start": 94, "audio": 0, "end": 95878, "filename": "/packages/models/vwep/shotg/shotgun_vwep.iqm"}, {"start": 95878, "audio": 0, "end": 96081, "filename": "/packages/models/vwep/shotg/iqm.cfg"}, {"start": 96081, "audio": 0, "end": 96263, "filename": "/packages/models/vwep/chaing/iqm.cfg"}, {"start": 96263, "audio": 0, "end": 207183, "filename": "/packages/models/vwep/chaing/minigun_vwep.iqm"}, {"start": 207183, "audio": 0, "end": 290783, "filename": "/packages/models/vwep/gl/gl_vwep.iqm"}, {"start": 290783, "audio": 0, "end": 290955, "filename": "/packages/models/vwep/gl/iqm.cfg"}, {"start": 290955, "audio": 0, "end": 291155, "filename": "/packages/models/vwep/rifle/iqm.cfg"}, {"start": 291155, "audio": 0, "end": 393235, "filename": "/packages/models/vwep/rifle/sniper_vwep.iqm"}, {"start": 393235, "audio": 0, "end": 474123, "filename": "/packages/models/vwep/rocket/rl_vwep.iqm"}, {"start": 474123, "audio": 0, "end": 474277, "filename": "/packages/models/vwep/rocket/iqm.cfg"}, {"start": 474277, "audio": 0, "end": 491673, "filename": "/packages/models/snoutx10k/win.md5anim.iqm"}, {"start": 491673, "audio": 0, "end": 498437, "filename": "/packages/models/snoutx10k/minigun_idle.md5anim.iqm"}, {"start": 498437, "audio": 0, "end": 505201, "filename": "/packages/models/snoutx10k/sniper_idle.md5anim.iqm"}, {"start": 505201, "audio": 0, "end": 511957, "filename": "/packages/models/snoutx10k/lag.md5anim.iqm"}, {"start": 511957, "audio": 0, "end": 550379, "filename": "/packages/models/snoutx10k/lower_mask.jpg"}, {"start": 550379, "audio": 0, "end": 557135, "filename": "/packages/models/snoutx10k/dead2.md5anim.iqm"}, {"start": 557135, "audio": 0, "end": 615839, "filename": "/packages/models/snoutx10k/backward.md5anim.iqm"}, {"start": 615839, "audio": 0, "end": 622603, "filename": "/packages/models/snoutx10k/chainsaw_idle.md5anim.iqm"}, {"start": 622603, "audio": 0, "end": 684895, "filename": "/packages/models/snoutx10k/forward.md5anim.iqm"}, {"start": 684895, "audio": 0, "end": 753352, "filename": "/packages/models/snoutx10k/lower_normals.jpg"}, {"start": 753352, "audio": 0, "end": 756996, "filename": "/packages/models/snoutx10k/ragdoll.cfg"}, {"start": 756996, "audio": 0, "end": 813273, "filename": "/packages/models/snoutx10k/upper_normals.jpg"}, {"start": 813273, "audio": 0, "end": 837345, "filename": "/packages/models/snoutx10k/dying.md5anim.iqm"}, {"start": 837345, "audio": 0, "end": 837439, "filename": "/packages/models/snoutx10k/readme.txt"}, {"start": 837439, "audio": 0, "end": 895841, "filename": "/packages/models/snoutx10k/lower.jpg"}, {"start": 895841, "audio": 0, "end": 898870, "filename": "/packages/models/snoutx10k/anims.cfg"}, {"start": 898870, "audio": 0, "end": 909814, "filename": "/packages/models/snoutx10k/shotgun_shoot.md5anim.iqm"}, {"start": 909814, "audio": 0, "end": 921210, "filename": "/packages/models/snoutx10k/shoot.md5anim.iqm"}, {"start": 921210, "audio": 0, "end": 949566, "filename": "/packages/models/snoutx10k/taunt.md5anim.iqm"}, {"start": 949566, "audio": 0, "end": 949948, "filename": "/packages/models/snoutx10k/iqm.cfg"}, {"start": 949948, "audio": 0, "end": 967024, "filename": "/packages/models/snoutx10k/pain2.md5anim.iqm"}, {"start": 967024, "audio": 0, "end": 977992, "filename": "/packages/models/snoutx10k/chainsaw_attack.md5anim.iqm"}, {"start": 977992, "audio": 0, "end": 996148, "filename": "/packages/models/snoutx10k/swim.md5anim.iqm"}, {"start": 996148, "audio": 0, "end": 1002904, "filename": "/packages/models/snoutx10k/dead.md5anim.iqm"}, {"start": 1002904, "audio": 0, "end": 1041896, "filename": "/packages/models/snoutx10k/upper_mask.jpg"}, {"start": 1041896, "audio": 0, "end": 1048652, "filename": "/packages/models/snoutx10k/gl_idle.md5anim.iqm"}, {"start": 1048652, "audio": 0, "end": 1109317, "filename": "/packages/models/snoutx10k/upper.jpg"}, {"start": 1109317, "audio": 0, "end": 1116081, "filename": "/packages/models/snoutx10k/shotgun_idle.md5anim.iqm"}, {"start": 1116081, "audio": 0, "end": 1131277, "filename": "/packages/models/snoutx10k/sink.md5anim.iqm"}, {"start": 1131277, "audio": 0, "end": 1205301, "filename": "/packages/models/snoutx10k/idle.md5anim.iqm"}, {"start": 1205301, "audio": 0, "end": 1212057, "filename": "/packages/models/snoutx10k/rl_idle.md5anim.iqm"}, {"start": 1212057, "audio": 0, "end": 1274349, "filename": "/packages/models/snoutx10k/left.md5anim.iqm"}, {"start": 1274349, "audio": 0, "end": 1290585, "filename": "/packages/models/snoutx10k/lose.md5anim.iqm"}, {"start": 1290585, "audio": 0, "end": 1301457, "filename": "/packages/models/snoutx10k/rl_shoot.md5anim.iqm"}, {"start": 1301457, "audio": 0, "end": 1528017, "filename": "/packages/models/snoutx10k/snoutx10k.iqm"}, {"start": 1528017, "audio": 0, "end": 1588125, "filename": "/packages/models/snoutx10k/right.md5anim.iqm"}, {"start": 1588125, "audio": 0, "end": 1599041, "filename": "/packages/models/snoutx10k/gl_shoot.md5anim.iqm"}, {"start": 1599041, "audio": 0, "end": 1605797, "filename": "/packages/models/snoutx10k/jump.md5anim.iqm"}, {"start": 1605797, "audio": 0, "end": 1623713, "filename": "/packages/models/snoutx10k/pain.md5anim.iqm"}, {"start": 1623713, "audio": 0, "end": 1646361, "filename": "/packages/models/snoutx10k/dying2.md5anim.iqm"}, {"start": 1646361, "audio": 0, "end": 1653117, "filename": "/packages/models/snoutx10k/edit.md5anim.iqm"}, {"start": 1653117, "audio": 0, "end": 1676565, "filename": "/packages/models/snoutx10k/punch.md5anim.iqm"}, {"start": 1676565, "audio": 0, "end": 1687621, "filename": "/packages/models/snoutx10k/sniper_shoot.md5anim.iqm"}, {"start": 1687621, "audio": 0, "end": 1698677, "filename": "/packages/models/snoutx10k/minigun_shoot.md5anim.iqm"}, {"start": 1698677, "audio": 0, "end": 1699159, "filename": "/packages/models/snoutx10k/hudguns/iqm.cfg"}, {"start": 1699159, "audio": 0, "end": 1836663, "filename": "/packages/models/snoutx10k/hudguns/snout_hands.iqm"}, {"start": 1836663, "audio": 0, "end": 1856920, "filename": "/packages/models/snoutx10k/hudguns/snout_hands_mask.jpg"}, {"start": 1856920, "audio": 0, "end": 1962717, "filename": "/packages/models/snoutx10k/hudguns/snout_hands.jpg"}, {"start": 1962717, "audio": 0, "end": 2023800, "filename": "/packages/models/snoutx10k/hudguns/snout_hands_normals.jpg"}, {"start": 2023800, "audio": 0, "end": 2023928, "filename": "/packages/models/snoutx10k/hudguns/shotg/iqm.cfg"}, {"start": 2023928, "audio": 0, "end": 2024057, "filename": "/packages/models/snoutx10k/hudguns/chaing/iqm.cfg"}, {"start": 2024057, "audio": 0, "end": 2024182, "filename": "/packages/models/snoutx10k/hudguns/gl/iqm.cfg"}, {"start": 2024182, "audio": 0, "end": 2024310, "filename": "/packages/models/snoutx10k/hudguns/rifle/iqm.cfg"}, {"start": 2024310, "audio": 0, "end": 2024439, "filename": "/packages/models/snoutx10k/hudguns/rocket/iqm.cfg"}, {"start": 2024439, "audio": 0, "end": 2024533, "filename": "/packages/models/hudguns/readme.txt"}, {"start": 2024533, "audio": 0, "end": 2056309, "filename": "/packages/models/hudguns/shotg/shotgun_mask.jpg"}, {"start": 2056309, "audio": 0, "end": 2060029, "filename": "/packages/models/hudguns/shotg/shotgun_attack.md5anim.iqm"}, {"start": 2060029, "audio": 0, "end": 2060771, "filename": "/packages/models/hudguns/shotg/iqm.cfg"}, {"start": 2060771, "audio": 0, "end": 2066469, "filename": "/packages/models/hudguns/shotg/shotgun_shell.jpg"}, {"start": 2066469, "audio": 0, "end": 2068379, "filename": "/packages/models/hudguns/shotg/shotgun_shell_mask.jpg"}, {"start": 2068379, "audio": 0, "end": 2071447, "filename": "/packages/models/hudguns/shotg/hands_shotgun_idle.md5anim.iqm"}, {"start": 2071447, "audio": 0, "end": 2072227, "filename": "/packages/models/hudguns/shotg/shotgun_idle.md5anim.iqm"}, {"start": 2072227, "audio": 0, "end": 2174956, "filename": "/packages/models/hudguns/shotg/shotgun.jpg"}, {"start": 2174956, "audio": 0, "end": 2176780, "filename": "/packages/models/hudguns/shotg/shotgun_shell_normals.jpg"}, {"start": 2176780, "audio": 0, "end": 2301372, "filename": "/packages/models/hudguns/shotg/shotgun.iqm"}, {"start": 2301372, "audio": 0, "end": 2312848, "filename": "/packages/models/hudguns/shotg/hands_shotgun_shoot.md5anim.iqm"}, {"start": 2312848, "audio": 0, "end": 2359951, "filename": "/packages/models/hudguns/shotg/shotgun_normals.jpg"}, {"start": 2359951, "audio": 0, "end": 2363351, "filename": "/packages/models/hudguns/chaing/hands_mg_shoot.iqm"}, {"start": 2363351, "audio": 0, "end": 2363823, "filename": "/packages/models/hudguns/chaing/chaing_shoot.iqm"}, {"start": 2363823, "audio": 0, "end": 2399890, "filename": "/packages/models/hudguns/chaing/m134_normals.jpg"}, {"start": 2399890, "audio": 0, "end": 2400318, "filename": "/packages/models/hudguns/chaing/chaing_idle.iqm"}, {"start": 2400318, "audio": 0, "end": 2400885, "filename": "/packages/models/hudguns/chaing/iqm.cfg"}, {"start": 2400885, "audio": 0, "end": 2403953, "filename": "/packages/models/hudguns/chaing/hands_mg_idle.iqm"}, {"start": 2403953, "audio": 0, "end": 2494577, "filename": "/packages/models/hudguns/chaing/chaing.iqm"}, {"start": 2494577, "audio": 0, "end": 2642640, "filename": "/packages/models/hudguns/chaing/m134.jpg"}, {"start": 2642640, "audio": 0, "end": 2674229, "filename": "/packages/models/hudguns/chaing/m134_mask.jpg"}, {"start": 2674229, "audio": 0, "end": 2692039, "filename": "/packages/models/hudguns/gl/gl_mask.jpg"}, {"start": 2692039, "audio": 0, "end": 2727742, "filename": "/packages/models/hudguns/gl/gl_normals.jpg"}, {"start": 2727742, "audio": 0, "end": 2728225, "filename": "/packages/models/hudguns/gl/iqm.cfg"}, {"start": 2728225, "audio": 0, "end": 2792163, "filename": "/packages/models/hudguns/gl/gl.jpg"}, {"start": 2792163, "audio": 0, "end": 2796911, "filename": "/packages/models/hudguns/gl/hands_gl_shoot.md5anim.iqm"}, {"start": 2796911, "audio": 0, "end": 2797419, "filename": "/packages/models/hudguns/gl/gl_idle.md5anim.iqm"}, {"start": 2797419, "audio": 0, "end": 2952291, "filename": "/packages/models/hudguns/gl/gl.iqm"}, {"start": 2952291, "audio": 0, "end": 2955359, "filename": "/packages/models/hudguns/gl/hands_gl_idle.md5anim.iqm"}, {"start": 2955359, "audio": 0, "end": 2955951, "filename": "/packages/models/hudguns/gl/gl_shoot.md5anim.iqm"}, {"start": 2955951, "audio": 0, "end": 2959019, "filename": "/packages/models/hudguns/rifle/hands_rifle_idle.md5anim.iqm"}, {"start": 2959019, "audio": 0, "end": 3004500, "filename": "/packages/models/hudguns/rifle/sniper_normals.jpg"}, {"start": 3004500, "audio": 0, "end": 3194204, "filename": "/packages/models/hudguns/rifle/rifle.iqm"}, {"start": 3194204, "audio": 0, "end": 3195348, "filename": "/packages/models/hudguns/rifle/rifle_shoot.md5anim.iqm"}, {"start": 3195348, "audio": 0, "end": 3195943, "filename": "/packages/models/hudguns/rifle/iqm.cfg"}, {"start": 3195943, "audio": 0, "end": 3293501, "filename": "/packages/models/hudguns/rifle/sniper.jpg"}, {"start": 3293501, "audio": 0, "end": 3311329, "filename": "/packages/models/hudguns/rifle/hands_rifle_shoot.md5anim.iqm"}, {"start": 3311329, "audio": 0, "end": 3311925, "filename": "/packages/models/hudguns/rifle/rifle_idle.md5anim.iqm"}, {"start": 3311925, "audio": 0, "end": 3340387, "filename": "/packages/models/hudguns/rifle/sniper_mask.jpg"}, {"start": 3340387, "audio": 0, "end": 3447099, "filename": "/packages/models/hudguns/rocket/rl.iqm"}, {"start": 3447099, "audio": 0, "end": 3447758, "filename": "/packages/models/hudguns/rocket/iqm.cfg"}, {"start": 3447758, "audio": 0, "end": 3451498, "filename": "/packages/models/hudguns/rocket/hands_rl_shoot.md5anim.iqm"}, {"start": 3451498, "audio": 0, "end": 3556812, "filename": "/packages/models/hudguns/rocket/rl.jpg"}, {"start": 3556812, "audio": 0, "end": 3582512, "filename": "/packages/models/hudguns/rocket/rl_mask.jpg"}, {"start": 3582512, "audio": 0, "end": 3583020, "filename": "/packages/models/hudguns/rocket/rl_idle.md5anim.iqm"}, {"start": 3583020, "audio": 0, "end": 3583656, "filename": "/packages/models/hudguns/rocket/rl_shoot.md5anim.iqm"}, {"start": 3583656, "audio": 0, "end": 3586724, "filename": "/packages/models/hudguns/rocket/hands_rl_idle.md5anim.iqm"}, {"start": 3586724, "audio": 0, "end": 3629792, "filename": "/packages/models/hudguns/rocket/rl_normals.jpg"}], "remote_package_size": 3629792, "package_uuid": "d9a02d15-52a8-4e0f-b5cf-9c67756506c2"});

})();

