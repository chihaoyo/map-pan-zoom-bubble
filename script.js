$(function() {
  // bubble
  var $bubble = $('#bubble');

  // activate pan and zoom on map
  // https://github.com/ariutta/svg-pan-zoom
  var MAP = svgPanZoom('#map', {
    zoomEnabled: true,
    controlIconsEnabled: false,
    fit: false,
    center: true,
    minZoom: 0.2,
    onZoom: function() { // function that executes when zoom
      $bubble.css('transform', 'scale(' + MAP.getZoom() + ')'); // scale the bubble
    }
  });

  // all groups
  var groups = {
    group1: {
      text: 'Group 1',
      year: 1999
    },
    group2: {
      text: 'Group 2'
    },
    group3: {
      text: 'Group 3'
    }
  };

  // add mouse event listeners to each group
  for(var id in groups) {
    //console.log(id);
    var group = groups[id];
    var $group = $('#' + id).attr('class', 'group');
    $group.mouseenter(function() {
      //console.log('in');
      var id = $(this).css('opacity', 1).attr('id').replace('#', '');
      var html = '<img src="images/' + id + '.jpg"><p>' + groups[id].text + '</p>';
      $bubble.html(html); // change content of bubble
      $bubble.toggleClass('show');
    })
    .mouseout(function() {
      //console.log('out');
      $(this).css('opacity', 0.5);
      $bubble.toggleClass('show');
      $bubble.html(''); // empty content of bubble
    })
    .mousemove(function() {
      var offset = 12; // keep distance from cursor
      $bubble.css({top: event.pageY + offset, left: event.pageX + offset}); // move bubble
    });
  }
});
