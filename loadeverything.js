// Three.js texture & mesh loader boilerplate

var loadedMeshes = [];
var loadedTextures = new Object();

var manager = new THREE.LoadingManager();

manager.onLoad = function () {

	// Do something when meshes and textures are loaded

	createScene();

	// Access texture

	var texture = loadedTextures.myTexture;

	// Access mesh

	var mesh = loadedMeshes.find( x => x.name === "NAME" );

};

function loadEverything() {

	loadAllMeshes();
	loadAllTextures();

}

function loadAllTextures() {

	var textureLoader = new THREE.TextureLoader( manager );

	loadedTextures.myTexture = textureLoader.load( './assets/my_texture.jpg' );
	loadedTextures.mySecondTexture = textureLoader.load( './assets/my_second_texture.jpg' );

}

function loadAllMeshes() {

	var loader = new THREE.FBXLoader( manager );

	// It will keep the name you put in the .fbx file
	// Can load multiple objects present in the .fbx file

	loader.load( "./assets/my_model.fbx", function ( object ) {
			
		object.traverse( function ( child ) {

			if ( child.isMesh === true ) {

				child.geometry.name = child.name;

				loadedMeshes.push( child.geometry );

			}

		} );

	});

}

