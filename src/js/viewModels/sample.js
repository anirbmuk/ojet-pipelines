define([], function () {
  function SampleViewModel() {
    const test = function (input) {
      if (input === 10) {
        return 'TEN';
      } else {
        return 'NOT TEN';
      }
    };
    console.error(test());
  }

  return SampleViewModel;
});
