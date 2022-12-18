var canvas = document.getElementById('canvas');
canvas.width = innerWidth;	//canvasの横幅
canvas.height = innerHeight;	//canvasの縦幅
var ctx=canvas.getContext('2d');
ctx.textAlign='center';
ctx.textBaseline='middle';

let a=10,b=10,ck_f=0,mouse_x,mouse_y;
let game_f=1;

let Query_size,ans_id,Query_str,Query_info,Query_img;
//問題数,こたえのid,問題文
class quiz{
    constructor(x,y,H,W,Id,img,type){
        this.img=img; //画像または文字
        this.x=x;//x座標
        this.y=y;//y座標
        this.H=H;//縦の幅
        this.W=W;//横の幅
        this.id=Id;//id
        this.type=type;//出題形式
        this.col='black';
    }
    putImage(){
        if(this.type==0){
            ctx.drawImage(this.img,this.x,this.y);
            ckImg(this.x,this.y);
        }
        else{
            this.ckImg(this.x-this.W/2,this.y-this.H/2);
            ctx.fillStyle='white';
            ctx.font='48px serif';
            ctx.fillText(this.img,this.x,this.y);
        }
    }
    ckImg(px,py){
        ctx.fillStyle=this.col;
        ctx.fillRect(px,py,this.W,this.H);
        if(px<=mouse_x&&mouse_x<=this.W+px&&py<=mouse_y&&mouse_y<=this.H+py){
            this.col='blue';
            if(ck_f==1){
                answer(this.id);
                //console.log(ck_f);
            }
            else{
                //console.log(ck_f);
            }
        }
        else this.col='black';
    }
}
let query=new Array();
function quizSet(ans,info,tit,size,Img,Type){
    ans_id=ans; Query_size=size; Query_str=tit; Query_info=info;  Query_img=Img;
    //console.log(Type);
    for(var qi=0;qi<Query_size;qi++){
        if(Type==0) query[qi]=new quiz(164+300*qi,322,300,300,qi,'',Type);
        else query[qi]=new quiz(764,322+100*qi,100,1000,qi,'',Type);
    }
}
class Button{
    constructor(x,y,H,W,Id,tx){
        this.x=x;
        this.y=y;
        this.H=H;
        this.W=W;
        this.id=Id;
        this.tx=tx;
        this.col='black';
    }
    putText(type){
        this.type=type;
        this.ckImg(this.x-this.W/2,this.y-this.H/2);
        ctx.fillStyle='white';
        ctx.font='48px serif';
        ctx.fillText(this.tx,this.x,this.y);
    }
    ckImg(px,py){
        ctx.fillStyle=this.col;
        ctx.fillRect(px,py,this.W,this.H);
        if(px<=mouse_x&&mouse_x<=this.W+px&&py<=mouse_y&&mouse_y<=this.H+py){
            this.col='blue';
            if(ck_f==1){
                //console.log(ck_f);
                if(this.type==1) game_f=1;
                else{
                    window.location.href = "index.html"
                }
            }
            else{
                //console.log(ck_f);
            }
        }
        else this.col='black';
    }
}
canvas.addEventListener("mousemove", (e) => {
    var rect = e.target.getBoundingClientRect()
    mouse_x = e.clientX - rect.left
    mouse_y = e.clientY - rect.top
    //console.log(mouse_x,mouse_y);
});
let retry=new Button(300,500,100,250,1,"リトライ");
let go_map=new Button(1228,500,100,250,1,"マップへ");
function main(){
    requestAnimationFrame(main);
    ctx.fillStyle='white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    if(game_f==1){
        //問題
        ctx.font='48px serif';
        ctx.fillStyle='black';
        ctx.fillText("問題",764,50);
        ctx.fillText(Query_str,764,100);
        //console.log(Query_str);
        for(var i=0;i<Query_size;i++){
            query[i].putImage();
        }
    }
    if(game_f==2){
        ctx.fillStyle='black';
        ctx.font='190px serif';
        ctx.fillText("正解",764,150);
        ctx.font='48px serif';
        ctx.fillText(Query_info,764,300);
        go_map.putText();
        //マップへ
    }
    if(game_f==3){
        retry.putText(1);
        go_map.putText(0);
        ctx.fillStyle='black';
        ctx.font='190px serif';
        ctx.fillText("不正解",764,150);
        //リトライ:マップへ
    }
}
addEventListener('mouseup',function(){ck_f=0;});
addEventListener('mousedown',function(){ck_f=1;});
function answer(_id){
    if(ans_id==_id){
        game_f=2;//正解
    }
    else{
        game_f=3;//不正解
    }
}
addEventListener('load',function(){

    console.log(quiz_meta);
    quizSet(quiz_meta[1],quiz_meta[2],quiz_meta[0],4,quiz_meta[4],1)
    main()
},false);