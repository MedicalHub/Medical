Package.describe({
	summary: "Package for forgetls.",
	version: '1.0.0'
});

Package.on_use(function (api, where) {
  api.export(['forge'], 'client');
  api.add_files('forge.min.js', 'client');
});
