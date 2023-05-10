var template 

var mc = new FontFace("minecraft", 'url("./font/minecraft_pl_font.woff")');
mc.load().then((mc) => {
    document.fonts.add(mc);
    template = new limg("./temp.png",()=>{
        generate();
    })
});


var poses = [
    [322,135],//1
    [0,0],//2
    [0,0],//3
    [0,0],//4
    [0,0],//5
    [0,0],//6
    [0,0],//7
    [0,0],//8
    [0,0],//9
];

var off = 125
var ei = 1;
for(var i = 0;i<3;i++){
    for(var j = 0;j<3;j++){
        if(j==0&&i==0)continue;
        poses[ei][0] = poses[0][0]+(off*j)
        poses[ei][1] = poses[0][1]+(off*i)
        ei++;
    }
}

function generate(){
    reset();
    template.draw(0,0);
    poses.forEach(p=>{
        ctx.fillStyle = "white"
        ctx.fillRect(p[0],p[1],115,115);
        ctx.fillStyle = "black"
        ctx.font = '30px minecraft';
        drawRandom(p[0],p[1]);

    })
}
var used = [];
var list = [
    [//nerfs
        "slowbor",
        "zacian",
        "lapras",
        "espeon",
        "mew",
        "charizard",
        "ursifu",
        "chandelure",
        "duraludon",
        "comfey",
        "hoopa"
    ],
    [//buffs
        "glaceon",//my beloved
        "absol",
        "mamoswime",
        "zeraora",
        "crustle",
        "azumaril",
        "buzzwole",
        "scizor",
        "lucario",
        "tsereena",
        "greedent"
    ]
];
function getRandom(){
    if(Math.round(Math.random())%2){
        var out = ["nerf",list[0][Math.floor(Math.random()*list[0].length)]];
        if(used.includes(out[1])){
            return getRandom();
        }
        used.push(out[1]);
        return out;
    }else{
        var out = ["buff",list[1][Math.floor(Math.random()*list[1].length)]];
        if(used.includes(out[1])){
            return getRandom();
        }
        used.push(out[1]);
        return out;
    }
}
function drawRandom(x,y){
    var entry = getRandom();
    ctx.fillText(entry[0],x+5,y+25);
    ctx.fillText(entry[1],x+5,y+55);
}

function reset(){
    used = [];
}
