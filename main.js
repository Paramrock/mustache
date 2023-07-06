noseX = 0;
noseY = 0;

function preload()
{
  clown_nose = loadImage('https://i.postimg.cc/j5Nh0Dqx/hd-realistic-black-moustache-png-11660953338tnhkxblftr.png');
}

function setup()
{
   canvas = createCanvas(600,600);
   canvas.center();
   video  = createCapture(VIDEO);
   video.hide();
   video.size(600,600)

   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
   if(results.length > 0)
   {
     console.log(results);
     noseX = results[0].pose.nose.x - 15;
     noseY = results[0].pose.nose.y - 15;
     console.log("nose x = " + noseX);
     console.log("nose y = " + noseY);
   }
}

function modelLoaded()
{
    console.log('poseNet is initialized')
}

function draw()
{
   image(video,0,0,300,300);
   image(clown_nose,noseX,noseY,30,30);
}

function take_snapshot()
{
    save('param.png')
}