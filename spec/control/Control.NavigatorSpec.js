describe("Control.Navigator", function () {
  var reader;
  var options = { region: 'bottom.navigator' };

  var currentPercentage = function(reader) {
    var current = reader.currentLocation();
    var location = reader.locations.locationFromCfi(current.start.cfi);
    return Math.ceil(( location / reader.locations.total ) * 100);
  }


  beforeEach(function() {
    reader = cozy.reader(document.createElement('div'), {
      engine: 'mock',
      href: 'mock.epub',
      metadata: {
        doi: 'https://doi.org/10.0000/cozy.0000'
      }
    });    
  });

  it("can be added to an unloaded reader", function () {
    new cozy.Control.Navigator(options).addTo(reader);
  });

  it("responds to page changes", function () {
    var control = new cozy.Control.Navigator(options).addTo(reader);
    reader.start();

    reader.gotoPage(3);
    expect(control._control.value).to.be('30'); // currentPercentage(reader).toString()

    reader.gotoPage(7);
    expect(control._control.value).to.be('70');
  });

  it("reader responds to control changes", function () {
    var control = new cozy.Control.Navigator(options).addTo(reader);
    reader.start();

    reader.gotoPage(3);
    control._control.value = 70;

    var event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, false);
    control._control.dispatchEvent(event);

    var current = reader.currentLocation();
    expect(current.start.cfi).to.be(reader._locations[7]);

  });

});

