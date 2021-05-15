define([
  'ojs/ojresponsiveutils',
  'ojs/ojresponsiveknockoututils',
  'knockout',
  'ojs/ojmodule-element-utils',
  'ojs/ojmodule-element',
  'ojs/ojknockout'
], function (ResponsiveUtils, ResponsiveKnockoutUtils, ko, ModuleElementUtils) {
  function ControllerViewModel() {
    const self = this;

    var smQuery = ResponsiveUtils.getFrameworkQuery(
      ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY
    );
    self.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

    self.appName = ko.observable('JET pipelines');
    self.userLogin = ko.observable('anirbmuk');

    self.config = ModuleElementUtils.createConfig({
      name: 'sample'
    });
  }

  return new ControllerViewModel();
});
