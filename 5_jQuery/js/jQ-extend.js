$.extend({
    min: function(){
        return a > b ? b : a;
    },
    max: function(){
        return a > b ? a : b;
    },
    leftTrim: function(str){
        return str.replace(/^\s+/, "");
    },
    rightTrim: function(str){
        return str.replace(/\s+$/, "");
    }
});
$.fn.extend({
    checkAll:function(){
        // 因为为jQuery对象调用，所以this为jQuery对象
        this.prop("checked", true);   
    },
    unCheckAll:function(){
        this.prop("checked", false);
    },
    reverseCheck:function(){
        this.each(function(){
            this.checked = !this.checked;
        });
    }
});