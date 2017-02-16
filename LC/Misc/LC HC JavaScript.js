/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {

  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
    $("ul[id*='flyout']").hide();
  });

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $answerbodyTextarea = $(".answer-body textarea"),
  $answerFormControls = $(".answer-form-controls"),
  $commentContainerTextarea = $(".comment-container textarea"),
  $commentContainerFormControls = $(".comment-form-controls");

  $answerbodyTextarea.one("focus", function() {
    $answerFormControls.show();
  });

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  if ($answerbodyTextarea.val() !== "") {
    $answerFormControls.show();
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select")
    .on("change", function() {
      search();
    });

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }

  // Submit organization form in the request page
  $("#request-organization select").on("change", function() {
    this.form.submit();
  });

    //
  //
  //
  // SPLIT CATEGORY/SECTION LISTS INTO COLUMNS
  //
  var postsArr = new Array(),
      $postsList = $('ul.posts');

  //Create array of all posts in lists
  $postsList.find('li.test').each(function(){
      postsArr.push($(this).html());
  })

  //Split the array at this point. The original array is altered.
  var firstList = postsArr.splice(0, Math.round(postsArr.length / 2)),
      secondList = postsArr,
      ListHTML = '';

  function createHTML(list){
      ListHTML = '';
      for (var i = 0; i < list.length; i++) {
          ListHTML += '<li>' + list[i] + '</li>'
      };
  }

  //Generate HTML for first list
  createHTML(firstList);
  $postsList.html(ListHTML);

  //Generate HTML for second list
  createHTML(secondList);
  //Create new list after original one
  $postsList.after('<ul class="posts"></ul>').next().html(ListHTML);
  
  
  //
  //
  //
  // Show/hide div (used for a menu in .footer-links)
  //
  $('.submenu-btn-1').click(function() {
    $('#submenu-1').toggle('');
	});
    $('.submenu-btn-2').click(function() {
    $('#submenu-2').toggle('');
	});
    $('.submenu-btn-3').click(function() {
    $('#submenu-3').toggle('');
	});
  $("div.question-text.markdown > ul li a").attr("rel", "");
  
  /// Revised flyout for footer
$('.submenu-btn').click(function(e) {
    e.stopPropagation();
    var idToToggle = $(this).attr("data-flyout-target");
      $("ul[id*='flyout']").not(idToToggle).hide();
    $(idToToggle).toggle('');    
	});
///

  /// Disable the new post button for community - ask a question ///
  var askQuestionNewPost = $( 'a[href*="new?community_post%5Btopic_id%5D=200257586"]' );
  
  if (askQuestionNewPost.length === 1) {
      $(askQuestionNewPost).click(function(event) {
          event.preventDefault();
      });
      $(askQuestionNewPost).removeAttr("href");
      $(askQuestionNewPost).addClass('disabled-post-btn');
      $(askQuestionNewPost).before('<div class="disabled-post-btn-fix">New posts are disabled</div>');
  }
  ///                         ///                               ///
  
  /// Label community - ask a question as closed ///
  var communityLink = $("a:contains('')");
  $('ul').find('a').filter(':contains("Community - Ask a question")').parent().next().children().first().after('<span style="color:#FA8F1E;">Topic Closed</span>');
  ///                   ///                      ///
  
  //Badging Code//
  var moderators = ["Username 1", "Username 2", "Username 3"];
  var supportManagers = ["Mitchell C", "Keyvan S", "Sara M", "Andres M", "Kristy P", "Remy M", "McKayl B"];
  $('.answer-author').each(function(index) {
    if ($.inArray($.trim($(this).text()), moderators) > -1) {
      $(this).addClass('moderator');
    }
    else if ($.inArray($.trim($(this).text()), supportManagers) > -1) {
      $(this).addClass('support-manager');
    }
  });
  if ($.inArray($.trim($('.question-author').text()), moderators) > -1 ) {
    $('.question-author').addClass('moderator');
  }
    else if ($.inArray($.trim($('.question-author').text()), supportManagers) > -1 ) {
      $('.question-author').addClass('support-manager');
    }

    ///							///							///
  
  // Accordion Direct Link Hash Code //
  
  var anchor = window.location.hash;
  $(anchor).collapse('toggle');
  
  /// 						///							////
  
  // Start of Async HubSpot Analytics Code //

    (function(d,s,i,r) {
      if (d.getElementById(i)){return;}
      var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
      n.id=i;n.src='//js.hs-analytics.net/analytics/'+(Math.ceil(new Date()/r)*r)+'/442690.js';
      e.parentNode.insertBefore(n, e);
    })(document,"script","hs-analytics",300000);

// End of Async HubSpot Analytics Code //
  
});

