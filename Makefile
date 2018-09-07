
build :
	elm make --output static/main.js --debug src/Main.elm

prod :
	elm make --output static/main.js src/Main.elm
