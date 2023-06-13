
$(document).ready(function () {
    var table_data=$("#table-data");
    
$.ajax({
       url: 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
      method: "GET",
      success: function (data) {
        // var info=data[i];
              
        for (var i = 0; i <data.length; i++) { 
            //var info=data[i]; 
           var tData= `<tr class="data-row" id="`+data[i].id+`">

           <td class="column1 td">`+data[i].id+`</td>;
            <td class="column2 td">`+data[i].firstName+`</td>
            <td class="column3 td">`+data[i].lastName+`</td>
             <td class="column4 td">`+data[i].email+`</td>
             <td class="column5 td">`+data[i].phone+`</td></tr>` 

              $("#tbody").append(tData);   
                
          
        }
        var tdata=$("<td>");

        $("tr").on('click',function(e){
            //console.log("CLICKED ID"+this.id);           
           
            $(".data-row").removeClass("active");
            $(this).addClass("active");
            for(var i=0;i<data.length;i++){
                    if(this.id==data[i].id){
            //console.log("ID MATCHES"+data[i].id);
            $("#info-content").html("");
           var addr= data[i].address;
        var infoContent=`<div><b>User selected:</b>`+data[i].firstName+" "+data[i].lastName+`</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>`
                        +data[i].description+
                    `</textarea>
                </div>
                <div><b>Address:</b>`+addr.streetAddress+`</div>
                <div><b>City:</b>`+addr.city+`</div>
                <div><b>State:</b>` +addr.state+`</div>
                <div><b>Zip:</b>`+addr.zip+`</div>`
                $("#info-content").append(infoContent)
        }
    }
});
$( ".search_text" ).keyup(function(e) {

        var search_text=e.target.value;

        $(".td").each(function(){
           td_text = $(this).text();
           td_text = td_text.replace("<mark>", "");
           td_text = td_text.replace("</mark>", "");
           td_text = $(this).text();
           $(this).text(td_text);


        });
        var i =1;
        $(".td").each(function(){
            td_text = $(this).text();
            td_text1 = td_text;
            td_text1 = td_text1.toLowerCase();
    
            search_text1 = search_text.toLowerCase();
            var trow=$("tr");
    
            if(td_text1.indexOf(search_text1) !== -1 ){
            
                var search_text_len = search_text1.length;
                var start_str = parseInt(td_text1.indexOf(search_text1));
            
                var end_str = start_str+parseInt(search_text1.length);
                var substr_text = td_text.substring(start_str, end_str);
        

                text_highlighted = "<mark>"+substr_text+"</mark>";
                td_text = td_text.replace(substr_text, text_highlighted);
                $(this).html(td_text);
            
                           /*trow[i].style.display = "block";
      } else {
        trow[i].style.display = "none";
      }*/
            
    }  
    console.log(td_text,search_text)     
var i=0;
    
    
    if(td_text==substr_text){
        console.log(td_text,substr_text)
        trow[i].style.display = "block";
      } else {
        trow[i].style.display = "none";
      }
    i++

        });
        
    }); 

              },
      error: function (error) {
        alert("Something went wrong, please try agian after sometime!");
      },
    });
     })
        
    
