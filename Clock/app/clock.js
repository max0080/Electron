(function(){
    window.jQuery = window.$ = require('./jquery-2.1.4.min.js');
    
    
    var DAY_LIST = ["月","火","水","木","金","土","日"];
    
    function Clock(){
    }
    
    Clock.prototype.paddingZero = function(num){
        var result = "";
        
        result = ("00"+num).slice(-2);
        return result;
    }
    
    Clock.prototype.timeUpdate = function(){
        var date = new Date();
        var hh = this.paddingZero(date.getHours());
        var mm = this.paddingZero(date.getMinutes());
        var ss = this.paddingZero(date.getSeconds());
        
        var date = date.getMonth() + "/" + date.getDate(-1) + " <span class='day'>" + DAY_LIST[date.getDay()] + "</span>";
        var time = hh + ":" + mm + ":" + ss;
        
        
        var el = "<div>" + date + "</div>"
        + "<div>" + time + "<div>"
        
        $("#main").html(el);
     }
    
    $(document).ready(function(){
        var clock = new Clock();
        clock.timeUpdate();
        setInterval(function(){
            clock.timeUpdate();
        },1000);
    });
})();