// require jquery3

//= require jquery
//= require jquery_ujs
//= require popper
//= require turbolinks
//= require jquery.easy-autocomplete
// require jquery.turbolinks
//= require_tree .
//= require bootstrap
//= require search_machine.js

//= require moment
//= require bootstrap-datetimepicker
// 日本語化する為ja.jsを読み込む
//= require moment/ja.js

      // function onButtonClick() {
      //   checkbox1 = document.getElementById("Checkbox1");
      //   checkbox2 = document.getElementById("Checkbox2");

      //   target = document.getElementById("output");
      //   if (checkbox1.checked == true) {
      //     target.innerHTML = ('<div style="margin-bottom: 10px;"><label for="price" style="margin-top: 10px;">検定日</label><%= f.date_select :date_of_verification , class: "form-control", :style => "margin-bottom:10px", :value => @safe.date_of_verification  %></div>');
      //   } else {
      //     target.innerHTML = "";
      //   }
      //   if (checkbox2.checked == true) {
      //     target.innerHTML += "チェック項目2がチェックされています。<br/>";
      //   } else {
      //     target.innerHTML += "";
      //   }
      // }


function OnLinkClick() {
	
  window.open('http://example.com/', '_blank', 'width=640, height=480, toolbar=no')
	
  target = document.getElementById("targetLink2");
  
  // $('#targetLink')[0].click();  // ←コレがポイント

  }




document.getElementById('file-input').onchange = function (e) {
    loadImage(
        e.target.files[0],
        function (img) {
            document.body.appendChild(img);
        },
        {maxWidth: 600} // Options
    );
};




	function entryChange1(){
		radio = document.getElementsByName('type_machine') 
		if(radio[0].checked) {
			//フォーム
			document.getElementById('firstBox').style.display = "block";
			document.getElementById('secondBox').style.display = "none";
			//特典
			document.getElementById('firstNotice').style.display = "block";
			document.getElementById('secondNotice').style.display = "none";
		}else if(radio[1].checked) {
			//フォーム
			document.getElementById('firstBox').style.display = "none";
			document.getElementById('secondBox').style.display = "block";
			//特典
			document.getElementById('firstNotice').style.display = "none";
			document.getElementById('secondNotice').style.display = "block";
		}else {
			//フォーム
			document.getElementById('firstBox').style.display = "block";
			document.getElementById('secondBox').style.display = "none";
			//特典
			document.getElementById('firstNotice').style.display = "block";
			document.getElementById('secondNotice').style.display = "none";
			
			
		}
	}
	//オンロードさせ、リロード時に選択を保持
	window.onload = entryChange1;




// :javascript
//   $(function() {
//     $('#micropost_content').autocomplete({
//       source: "/users/auto_complete.json",
//       delay: 500,
//       minLength: 2,
//       focus: function(event, ui) {
//         $("#micropost_content").val(ui.item.nickname);
//         return false;
//       },
//       select: function(event, ui) {
//         $('#micropost_content').val(ui.item.nickname);
//         return false;
//       }
//     }).data("ui-autocomplete")._renderItem = function(ul, item) {
//       return $("<li>").attr("data-value", item.nickname).data("ui-autocomplete-item", item).append("<a>" + item.nickname + "</a>").appendTo(ul);
//     };
//   });


