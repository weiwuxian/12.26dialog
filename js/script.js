function fun(options) {
    //默认参数
    var defalts = {
        width: 400,
        background: '#eee',
        height: 400,
        btn: ['确定']
    }
    var data = {};
    for (var key in defalts) {
        data[key] = defalts[key];
    }
    for (var key in options) {
        data[key] = options[key];
    }
    console.log(data);
    this.width = data.width;
    this.height = data.height;
    this.title = data.title;
    this.background = data.background;
    this.btn = data.btn;
    this.winw = document.body.offsetWidth || document.documentElement.clientWidth;
    this.winh = document.body.offsetHeight || document.documentElement.clientHeight;
    this.s = data.sure;
    this.c = data.close;
    //创建弹窗结构
    this.init();
}
fun.prototype = {
    constructor: fun,
    init: function() {
        //初始化
        var div = document.createElement('div');
        div.className = 'box';
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.background = this.background;
        div.style.left = (this.winw - this.width) / 2 + 'px';
        div.style.top = (this.winh - this.height) / 2 + 'px';
        document.body.appendChild(div);
        var h1 = document.createElement('h1');
        h1.innerHTML = this.title;
        div.appendChild(h1);
        var p = document.createElement('p');
        var pstr = '';
        for (var i = 0; i < this.btn.length; i++) {
            switch (this.btn[i]) {
                case '确定':
                    pstr += '<span class="sure">' + this.btn[i] + '</span>';
                    break;
                case '取消':
                    pstr += '<span class="close">' + this.btn[i] + '</span>';
                    break;
            }

        }
        p.innerHTML = pstr;
        div.appendChild(p);
        this.addEvent();
    },
    addEvent: function() {
        var surebtn = document.querySelector('.sure');
        var closebtn = document.querySelector('.close') ? document.querySelector('.close') : false;
        surebtn.onclick = this.s;
        closebtn.onclick = this.c;
    }
};