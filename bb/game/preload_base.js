
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
    var PACKAGE_NAME = 'base.data';
    var REMOTE_PACKAGE_BASE = 'base.data';
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
Module['FS_createPath']('/', 'data', true, true);
Module['FS_createPath']('/', 'packages', true, true);
Module['FS_createPath']('/packages', 'textures', true, true);
Module['FS_createPath']('/packages', 'fonts', true, true);
Module['FS_createPath']('/packages', 'icons', true, true);
Module['FS_createPath']('/packages', 'particles', true, true);
Module['FS_createPath']('/packages', 'sounds', true, true);
Module['FS_createPath']('/packages/sounds', 'aard', true, true);
Module['FS_createPath']('/packages/sounds', 'q009', true, true);
Module['FS_createPath']('/packages/sounds', 'yo_frankie', true, true);
Module['FS_createPath']('/packages', 'gk', true, true);
Module['FS_createPath']('/packages/gk', 'lava', true, true);
Module['FS_createPath']('/packages', 'caustics', true, true);
Module['FS_createPath']('/packages', 'models', true, true);
Module['FS_createPath']('/packages/models', 'debris', true, true);
Module['FS_createPath']('/packages/models', 'projectiles', true, true);
Module['FS_createPath']('/packages/models/projectiles', 'grenade', true, true);
Module['FS_createPath']('/packages/models/projectiles', 'rocket', true, true);
Module['FS_createPath']('/packages', 'brushes', true, true);
Module['FS_createPath']('/packages', 'hud', true, true);

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
              Module['removeRunDependency']('datafile_base.data');

    };
    Module['addRunDependency']('datafile_base.data');
  
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
 loadPackage({"files": [{"start": 0, "audio": 0, "end": 2407, "filename": "/data/keymap.cfg"}, {"start": 2407, "audio": 0, "end": 86894, "filename": "/data/glsl.cfg"}, {"start": 86894, "audio": 0, "end": 87907, "filename": "/data/stdlib.cfg"}, {"start": 87907, "audio": 0, "end": 96411, "filename": "/data/stdedit.cfg"}, {"start": 96411, "audio": 0, "end": 109963, "filename": "/data/background_decal.png"}, {"start": 109963, "audio": 0, "end": 112870, "filename": "/data/sounds.cfg"}, {"start": 112870, "audio": 0, "end": 117754, "filename": "/data/guioverlay.png"}, {"start": 117754, "audio": 0, "end": 121520, "filename": "/data/game_fps.cfg"}, {"start": 121520, "audio": 0, "end": 139082, "filename": "/data/background.png"}, {"start": 139082, "audio": 0, "end": 228712, "filename": "/data/stdshader.cfg"}, {"start": 228712, "audio": 0, "end": 232393, "filename": "/data/loading_frame.png"}, {"start": 232393, "audio": 0, "end": 239610, "filename": "/data/defaults.cfg"}, {"start": 239610, "audio": 0, "end": 239682, "filename": "/data/font.cfg"}, {"start": 239682, "audio": 0, "end": 242994, "filename": "/data/teammate.png"}, {"start": 242994, "audio": 0, "end": 248511, "filename": "/data/brush.cfg"}, {"start": 248511, "audio": 0, "end": 251794, "filename": "/data/hit.png"}, {"start": 251794, "audio": 0, "end": 254626, "filename": "/data/guislider.png"}, {"start": 254626, "audio": 0, "end": 257609, "filename": "/data/loading_bar.png"}, {"start": 257609, "audio": 0, "end": 265774, "filename": "/data/game_rpg.cfg"}, {"start": 265774, "audio": 0, "end": 395980, "filename": "/data/logo.png"}, {"start": 395980, "audio": 0, "end": 399263, "filename": "/data/crosshair.png"}, {"start": 399263, "audio": 0, "end": 447113, "filename": "/data/menus.cfg"}, {"start": 447113, "audio": 0, "end": 451359, "filename": "/data/guiskin.png"}, {"start": 451359, "audio": 0, "end": 451518, "filename": "/data/background_detail.png"}, {"start": 451518, "audio": 0, "end": 456402, "filename": "/data/mapshot_frame.png"}, {"start": 456402, "audio": 0, "end": 460333, "filename": "/data/guicursor.png"}, {"start": 460333, "audio": 0, "end": 461555, "filename": "/data/default_map_settings.cfg"}, {"start": 461555, "audio": 0, "end": 461691, "filename": "/data/default_map_models.cfg"}, {"start": 461691, "audio": 0, "end": 639253, "filename": "/packages/textures/waterfalln.jpg"}, {"start": 639253, "audio": 0, "end": 1033008, "filename": "/packages/textures/grass.png"}, {"start": 1033008, "audio": 0, "end": 1036819, "filename": "/packages/textures/sky.png"}, {"start": 1036819, "audio": 0, "end": 1039871, "filename": "/packages/textures/default.png"}, {"start": 1039871, "audio": 0, "end": 1044596, "filename": "/packages/textures/notexture.png"}, {"start": 1044596, "audio": 0, "end": 1045267, "filename": "/packages/textures/readme.txt"}, {"start": 1045267, "audio": 0, "end": 1395090, "filename": "/packages/textures/watern.jpg"}, {"start": 1395090, "audio": 0, "end": 1396619, "filename": "/packages/textures/basic512.png"}, {"start": 1396619, "audio": 0, "end": 1433813, "filename": "/packages/textures/waterfall.jpg"}, {"start": 1433813, "audio": 0, "end": 1688986, "filename": "/packages/textures/waterdudv.jpg"}, {"start": 1688986, "audio": 0, "end": 1844989, "filename": "/packages/textures/water.jpg"}, {"start": 1844989, "audio": 0, "end": 2087159, "filename": "/packages/textures/waterfalldudv.jpg"}, {"start": 2087159, "audio": 0, "end": 2089401, "filename": "/packages/fonts/default.cfg"}, {"start": 2089401, "audio": 0, "end": 2094126, "filename": "/packages/fonts/font_readme.txt"}, {"start": 2094126, "audio": 0, "end": 2180250, "filename": "/packages/fonts/font.png"}, {"start": 2180250, "audio": 0, "end": 2193307, "filename": "/packages/icons/exit.jpg"}, {"start": 2193307, "audio": 0, "end": 2211983, "filename": "/packages/icons/server.jpg"}, {"start": 2211983, "audio": 0, "end": 2227117, "filename": "/packages/icons/frankie.jpg"}, {"start": 2227117, "audio": 0, "end": 2243557, "filename": "/packages/icons/checkbox_off.jpg"}, {"start": 2243557, "audio": 0, "end": 2243654, "filename": "/packages/icons/readme.txt"}, {"start": 2243654, "audio": 0, "end": 2261961, "filename": "/packages/icons/action.jpg"}, {"start": 2261961, "audio": 0, "end": 2275457, "filename": "/packages/icons/snoutx10k.jpg"}, {"start": 2275457, "audio": 0, "end": 2288352, "filename": "/packages/icons/cube.jpg"}, {"start": 2288352, "audio": 0, "end": 2300014, "filename": "/packages/icons/arrow_bw.jpg"}, {"start": 2300014, "audio": 0, "end": 2313294, "filename": "/packages/icons/radio_on.jpg"}, {"start": 2313294, "audio": 0, "end": 2326672, "filename": "/packages/icons/info.jpg"}, {"start": 2326672, "audio": 0, "end": 2345400, "filename": "/packages/icons/radio_off.jpg"}, {"start": 2345400, "audio": 0, "end": 2357510, "filename": "/packages/icons/arrow_fw.jpg"}, {"start": 2357510, "audio": 0, "end": 2371014, "filename": "/packages/icons/hand.jpg"}, {"start": 2371014, "audio": 0, "end": 2389006, "filename": "/packages/icons/menu.jpg"}, {"start": 2389006, "audio": 0, "end": 2402074, "filename": "/packages/icons/chat.jpg"}, {"start": 2402074, "audio": 0, "end": 2420277, "filename": "/packages/icons/checkbox_on.jpg"}, {"start": 2420277, "audio": 0, "end": 2424366, "filename": "/packages/icons/menu.png"}, {"start": 2424366, "audio": 0, "end": 2464202, "filename": "/packages/particles/scorch.png"}, {"start": 2464202, "audio": 0, "end": 2521366, "filename": "/packages/particles/bullet.png"}, {"start": 2521366, "audio": 0, "end": 2579228, "filename": "/packages/particles/lightning.jpg"}, {"start": 2579228, "audio": 0, "end": 2649420, "filename": "/packages/particles/flames.png"}, {"start": 2649420, "audio": 0, "end": 2653932, "filename": "/packages/particles/smoke.png"}, {"start": 2653932, "audio": 0, "end": 2716084, "filename": "/packages/particles/ball2.png"}, {"start": 2716084, "audio": 0, "end": 3041984, "filename": "/packages/particles/lensflares.png"}, {"start": 3041984, "audio": 0, "end": 3042845, "filename": "/packages/particles/flare.jpg"}, {"start": 3042845, "audio": 0, "end": 3044650, "filename": "/packages/particles/spark.png"}, {"start": 3044650, "audio": 0, "end": 3064788, "filename": "/packages/particles/muzzleflash3.jpg"}, {"start": 3064788, "audio": 0, "end": 3065032, "filename": "/packages/particles/readme.txt"}, {"start": 3065032, "audio": 0, "end": 3118964, "filename": "/packages/particles/ball1.png"}, {"start": 3118964, "audio": 0, "end": 3121862, "filename": "/packages/particles/base.png"}, {"start": 3121862, "audio": 0, "end": 3141367, "filename": "/packages/particles/circle.png"}, {"start": 3141367, "audio": 0, "end": 3160389, "filename": "/packages/particles/muzzleflash2.jpg"}, {"start": 3160389, "audio": 0, "end": 3893868, "filename": "/packages/particles/explosion.png"}, {"start": 3893868, "audio": 0, "end": 3901283, "filename": "/packages/particles/steam.png"}, {"start": 3901283, "audio": 0, "end": 3921184, "filename": "/packages/particles/muzzleflash1.jpg"}, {"start": 3921184, "audio": 0, "end": 3921429, "filename": "/packages/particles/readme.txt~"}, {"start": 3921429, "audio": 0, "end": 3937055, "filename": "/packages/particles/blood.png"}, {"start": 3937055, "audio": 0, "end": 3939322, "filename": "/packages/particles/blob.png"}, {"start": 3939322, "audio": 1, "end": 3949974, "filename": "/packages/sounds/aard/die2.wav"}, {"start": 3949974, "audio": 1, "end": 3957640, "filename": "/packages/sounds/aard/pain6.wav"}, {"start": 3957640, "audio": 1, "end": 3961334, "filename": "/packages/sounds/aard/grunt2.wav"}, {"start": 3961334, "audio": 1, "end": 3970684, "filename": "/packages/sounds/aard/pain3.wav"}, {"start": 3970684, "audio": 1, "end": 3972388, "filename": "/packages/sounds/aard/tak.wav"}, {"start": 3972388, "audio": 1, "end": 3983750, "filename": "/packages/sounds/aard/land.wav"}, {"start": 3983750, "audio": 1, "end": 3987808, "filename": "/packages/sounds/aard/outofammo.wav"}, {"start": 3987808, "audio": 1, "end": 3999670, "filename": "/packages/sounds/aard/bang.wav"}, {"start": 3999670, "audio": 1, "end": 4011076, "filename": "/packages/sounds/aard/grunt1.wav"}, {"start": 4011076, "audio": 1, "end": 4015208, "filename": "/packages/sounds/aard/jump.wav"}, {"start": 4015208, "audio": 1, "end": 4023168, "filename": "/packages/sounds/aard/pain5.wav"}, {"start": 4023168, "audio": 1, "end": 4032882, "filename": "/packages/sounds/aard/die1.wav"}, {"start": 4032882, "audio": 1, "end": 4039528, "filename": "/packages/sounds/aard/weapload.wav"}, {"start": 4039528, "audio": 1, "end": 4064998, "filename": "/packages/sounds/aard/pain1.wav"}, {"start": 4064998, "audio": 1, "end": 4074408, "filename": "/packages/sounds/aard/pain2.wav"}, {"start": 4074408, "audio": 1, "end": 4082388, "filename": "/packages/sounds/aard/pain4.wav"}, {"start": 4082388, "audio": 1, "end": 4094702, "filename": "/packages/sounds/aard/itempick.wav"}, {"start": 4094702, "audio": 0, "end": 4114142, "filename": "/packages/sounds/q009/license.txt"}, {"start": 4114142, "audio": 1, "end": 4142524, "filename": "/packages/sounds/q009/pistol2.ogg"}, {"start": 4142524, "audio": 1, "end": 4169424, "filename": "/packages/sounds/q009/pistol3.ogg"}, {"start": 4169424, "audio": 1, "end": 4293822, "filename": "/packages/sounds/q009/shotgun3.ogg"}, {"start": 4293822, "audio": 1, "end": 4319995, "filename": "/packages/sounds/q009/teleport.ogg"}, {"start": 4319995, "audio": 1, "end": 4337870, "filename": "/packages/sounds/q009/outofammo.ogg"}, {"start": 4337870, "audio": 1, "end": 4460553, "filename": "/packages/sounds/q009/rifle3.ogg"}, {"start": 4460553, "audio": 1, "end": 4518490, "filename": "/packages/sounds/q009/rlauncher.ogg"}, {"start": 4518490, "audio": 1, "end": 4551112, "filename": "/packages/sounds/q009/quaddamage_out.ogg"}, {"start": 4551112, "audio": 1, "end": 4578999, "filename": "/packages/sounds/q009/minigun.ogg"}, {"start": 4578999, "audio": 1, "end": 4637698, "filename": "/packages/sounds/q009/rlauncher2.ogg"}, {"start": 4637698, "audio": 1, "end": 4761918, "filename": "/packages/sounds/q009/rifle2.ogg"}, {"start": 4761918, "audio": 0, "end": 4763234, "filename": "/packages/sounds/q009/readme.txt"}, {"start": 4763234, "audio": 1, "end": 4866300, "filename": "/packages/sounds/q009/ren2.ogg"}, {"start": 4866300, "audio": 1, "end": 4886743, "filename": "/packages/sounds/q009/weapswitch.ogg"}, {"start": 4886743, "audio": 1, "end": 4912999, "filename": "/packages/sounds/q009/minigun3.ogg"}, {"start": 4912999, "audio": 1, "end": 5038079, "filename": "/packages/sounds/q009/shotgun.ogg"}, {"start": 5038079, "audio": 1, "end": 5061407, "filename": "/packages/sounds/q009/minigun2.ogg"}, {"start": 5061407, "audio": 1, "end": 5080298, "filename": "/packages/sounds/q009/jumppad.ogg"}, {"start": 5080298, "audio": 1, "end": 5137943, "filename": "/packages/sounds/q009/rlauncher3.ogg"}, {"start": 5137943, "audio": 1, "end": 5165651, "filename": "/packages/sounds/q009/quaddamage_shoot.ogg"}, {"start": 5165651, "audio": 1, "end": 5199338, "filename": "/packages/sounds/q009/glauncher.ogg"}, {"start": 5199338, "audio": 1, "end": 5232566, "filename": "/packages/sounds/q009/glauncher3.ogg"}, {"start": 5232566, "audio": 1, "end": 5361603, "filename": "/packages/sounds/q009/rifle.ogg"}, {"start": 5361603, "audio": 1, "end": 5391585, "filename": "/packages/sounds/q009/explosion.ogg"}, {"start": 5391585, "audio": 1, "end": 5517687, "filename": "/packages/sounds/q009/shotgun2.ogg"}, {"start": 5517687, "audio": 1, "end": 5546081, "filename": "/packages/sounds/q009/pistol.ogg"}, {"start": 5546081, "audio": 1, "end": 5662520, "filename": "/packages/sounds/q009/ren3.ogg"}, {"start": 5662520, "audio": 1, "end": 5796306, "filename": "/packages/sounds/q009/ren.ogg"}, {"start": 5796306, "audio": 1, "end": 5831748, "filename": "/packages/sounds/q009/glauncher2.ogg"}, {"start": 5831748, "audio": 1, "end": 5851357, "filename": "/packages/sounds/yo_frankie/amb_waterdrip_2.ogg"}, {"start": 5851357, "audio": 0, "end": 5851987, "filename": "/packages/sounds/yo_frankie/readme.txt"}, {"start": 5851987, "audio": 1, "end": 5875892, "filename": "/packages/sounds/yo_frankie/watersplash2.ogg"}, {"start": 5875892, "audio": 1, "end": 5883305, "filename": "/packages/sounds/yo_frankie/sfx_interact.ogg"}, {"start": 5883305, "audio": 0, "end": 6058209, "filename": "/packages/gk/lava/lava_cc.dds"}, {"start": 6058209, "audio": 0, "end": 6407889, "filename": "/packages/gk/lava/lava_nm.dds"}, {"start": 6407889, "audio": 0, "end": 6433075, "filename": "/packages/caustics/caust13.png"}, {"start": 6433075, "audio": 0, "end": 6457239, "filename": "/packages/caustics/caust11.png"}, {"start": 6457239, "audio": 0, "end": 6480437, "filename": "/packages/caustics/caust04.png"}, {"start": 6480437, "audio": 0, "end": 6503881, "filename": "/packages/caustics/caust22.png"}, {"start": 6503881, "audio": 0, "end": 6527456, "filename": "/packages/caustics/caust03.png"}, {"start": 6527456, "audio": 0, "end": 6550625, "filename": "/packages/caustics/caust24.png"}, {"start": 6550625, "audio": 0, "end": 6574179, "filename": "/packages/caustics/caust26.png"}, {"start": 6574179, "audio": 0, "end": 6598658, "filename": "/packages/caustics/caust17.png"}, {"start": 6598658, "audio": 0, "end": 6621982, "filename": "/packages/caustics/caust06.png"}, {"start": 6621982, "audio": 0, "end": 6646501, "filename": "/packages/caustics/caust00.png"}, {"start": 6646501, "audio": 0, "end": 6669371, "filename": "/packages/caustics/caust05.png"}, {"start": 6669371, "audio": 0, "end": 6693238, "filename": "/packages/caustics/caust07.png"}, {"start": 6693238, "audio": 0, "end": 6717492, "filename": "/packages/caustics/caust30.png"}, {"start": 6717492, "audio": 0, "end": 6741317, "filename": "/packages/caustics/caust10.png"}, {"start": 6741317, "audio": 0, "end": 6765858, "filename": "/packages/caustics/caust18.png"}, {"start": 6765858, "audio": 0, "end": 6789964, "filename": "/packages/caustics/caust20.png"}, {"start": 6789964, "audio": 0, "end": 6813714, "filename": "/packages/caustics/caust29.png"}, {"start": 6813714, "audio": 0, "end": 6837358, "filename": "/packages/caustics/caust27.png"}, {"start": 6837358, "audio": 0, "end": 6837416, "filename": "/packages/caustics/readme.txt"}, {"start": 6837416, "audio": 0, "end": 6861054, "filename": "/packages/caustics/caust21.png"}, {"start": 6861054, "audio": 0, "end": 6885216, "filename": "/packages/caustics/caust08.png"}, {"start": 6885216, "audio": 0, "end": 6909099, "filename": "/packages/caustics/caust09.png"}, {"start": 6909099, "audio": 0, "end": 6933456, "filename": "/packages/caustics/caust16.png"}, {"start": 6933456, "audio": 0, "end": 6956957, "filename": "/packages/caustics/caust28.png"}, {"start": 6956957, "audio": 0, "end": 6981406, "filename": "/packages/caustics/caust15.png"}, {"start": 6981406, "audio": 0, "end": 7006147, "filename": "/packages/caustics/caust12.png"}, {"start": 7006147, "audio": 0, "end": 7030326, "filename": "/packages/caustics/caust19.png"}, {"start": 7030326, "audio": 0, "end": 7053601, "filename": "/packages/caustics/caust23.png"}, {"start": 7053601, "audio": 0, "end": 7078144, "filename": "/packages/caustics/caust31.png"}, {"start": 7078144, "audio": 0, "end": 7102636, "filename": "/packages/caustics/caust01.png"}, {"start": 7102636, "audio": 0, "end": 7126752, "filename": "/packages/caustics/caust02.png"}, {"start": 7126752, "audio": 0, "end": 7149958, "filename": "/packages/caustics/caust25.png"}, {"start": 7149958, "audio": 0, "end": 7175010, "filename": "/packages/caustics/caust14.png"}, {"start": 7175010, "audio": 0, "end": 7366836, "filename": "/packages/models/debris/skin.png"}, {"start": 7366836, "audio": 0, "end": 7367079, "filename": "/packages/models/debris/md2.cfg"}, {"start": 7367079, "audio": 0, "end": 7381855, "filename": "/packages/models/debris/tris.md2"}, {"start": 7381855, "audio": 0, "end": 7381993, "filename": "/packages/models/projectiles/grenade/iqm.cfg"}, {"start": 7381993, "audio": 0, "end": 7395230, "filename": "/packages/models/projectiles/rocket/skin.jpg"}, {"start": 7395230, "audio": 0, "end": 7402949, "filename": "/packages/models/projectiles/rocket/normal.jpg"}, {"start": 7402949, "audio": 0, "end": 7403609, "filename": "/packages/models/projectiles/rocket/readme.txt"}, {"start": 7403609, "audio": 0, "end": 7403765, "filename": "/packages/models/projectiles/rocket/iqm.cfg"}, {"start": 7403765, "audio": 0, "end": 7406901, "filename": "/packages/models/projectiles/rocket/rocket.iqm"}, {"start": 7406901, "audio": 0, "end": 7427669, "filename": "/packages/models/projectiles/rocket/mask.jpg"}, {"start": 7427669, "audio": 0, "end": 7428650, "filename": "/packages/brushes/square_32_solid.png"}, {"start": 7428650, "audio": 0, "end": 7428787, "filename": "/packages/brushes/gradient_128.png"}, {"start": 7428787, "audio": 0, "end": 7431151, "filename": "/packages/brushes/circle_128_solid.png"}, {"start": 7431151, "audio": 0, "end": 7432273, "filename": "/packages/brushes/circle_16_hard.png"}, {"start": 7432273, "audio": 0, "end": 7433279, "filename": "/packages/brushes/square_64_solid.png"}, {"start": 7433279, "audio": 0, "end": 7434361, "filename": "/packages/brushes/square_16_hard.png"}, {"start": 7434361, "audio": 0, "end": 7443996, "filename": "/packages/brushes/noise_128.png"}, {"start": 7443996, "audio": 0, "end": 7444055, "filename": "/packages/brushes/readme.txt"}, {"start": 7444055, "audio": 0, "end": 7445262, "filename": "/packages/brushes/square_64_hard.png"}, {"start": 7445262, "audio": 0, "end": 7448822, "filename": "/packages/brushes/circle_32_hard.png"}, {"start": 7448822, "audio": 0, "end": 7449814, "filename": "/packages/brushes/circle_8_soft.png"}, {"start": 7449814, "audio": 0, "end": 7450927, "filename": "/packages/brushes/circle_16_solid.png"}, {"start": 7450927, "audio": 0, "end": 7451922, "filename": "/packages/brushes/circle_8_solid.png"}, {"start": 7451922, "audio": 0, "end": 7454212, "filename": "/packages/brushes/noise_64.png"}, {"start": 7454212, "audio": 0, "end": 7455497, "filename": "/packages/brushes/circle_32_soft.png"}, {"start": 7455497, "audio": 0, "end": 7459585, "filename": "/packages/brushes/circle_128_hard.png"}, {"start": 7459585, "audio": 0, "end": 7461169, "filename": "/packages/brushes/circle_64_solid.png"}, {"start": 7461169, "audio": 0, "end": 7462260, "filename": "/packages/brushes/circle_16_soft.png"}, {"start": 7462260, "audio": 0, "end": 7463233, "filename": "/packages/brushes/square_16_solid.png"}, {"start": 7463233, "audio": 0, "end": 7463362, "filename": "/packages/brushes/gradient_64.png"}, {"start": 7463362, "audio": 0, "end": 7467694, "filename": "/packages/brushes/circle_64_hard.png"}, {"start": 7467694, "audio": 0, "end": 7468690, "filename": "/packages/brushes/circle_8_hard.png"}, {"start": 7468690, "audio": 0, "end": 7468793, "filename": "/packages/brushes/gradient_16.png"}, {"start": 7468793, "audio": 0, "end": 7472270, "filename": "/packages/brushes/circle_128_soft.png"}, {"start": 7472270, "audio": 0, "end": 7472390, "filename": "/packages/brushes/gradient_32.png"}, {"start": 7472390, "audio": 0, "end": 7473628, "filename": "/packages/brushes/circle_32_solid.png"}, {"start": 7473628, "audio": 0, "end": 7474811, "filename": "/packages/brushes/square_32_hard.png"}, {"start": 7474811, "audio": 0, "end": 7476625, "filename": "/packages/brushes/circle_64_soft.png"}, {"start": 7476625, "audio": 0, "end": 7497930, "filename": "/packages/hud/js.png"}, {"start": 7497930, "audio": 0, "end": 7603331, "filename": "/packages/hud/items.png"}, {"start": 7603331, "audio": 0, "end": 7624652, "filename": "/packages/hud/wasm.png"}, {"start": 7624652, "audio": 0, "end": 7624723, "filename": "/packages/hud/readme.txt"}, {"start": 7624723, "audio": 0, "end": 7768467, "filename": "/packages/hud/damage.png"}], "remote_package_size": 7768467, "package_uuid": "e23635d3-10ed-4704-b944-5ed53c195c7b"});

})();

