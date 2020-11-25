///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////OLEG SAVELEV/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////WEB222 Assignment #3/////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////JavaScript Functions/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//#region   IMAGE ARRAY

// IMAGE ARRAY
const images = [    // IMAGE ARRAY: This is the array of objects, which store the information about the images, including source ("file" for "src")
    {
        file: "SantaCruz-CuevaManos-P2210651b.jpg",
        name: "Hands",
        description: "Cave Paintings in Santa Cruz",
        dimensions: {
            width: 1600,
		    height: 1200
        }
    },
    {
        file: "GuaTewet_tree_of_life-LHFage.jpg",
        name: "Hands",
        description: "Tree of Life in Gua Tewet",
        dimensions: {
            width: 1947,
		    height: 2481
        }
    },
    {
        file: "Bestias11.jpg",
        name: "People and Animals",
        description: "Cave Paintings of Beasts",
        dimensions: {
            width: 1024,
		    height: 683
        }
    },
    {
        file: "20,000_Year_Old_Cave_Paintings_Hyena.png",
        name: "Hyenas",
        description: "20,000 Year Old Cave Paintings",
        dimensions: {
            width: 679,
		    height: 466
        }
    },
    {
        file: "Rhinos_Chauvet_Cave.jpg",
        name: "Rhinoceros",
        description: "Cave Paintings in Chauvet Cave",
        dimensions: {
            width: 1366,
		    height: 768
        }
    },
    {
        file: "Hands_in_Pettakere_Cave_DYK_crop.jpg",
        name: "Hands",
        description: "Cave Paintings in Pettakere Cave",
        dimensions: {
            width: 464,
		    height: 413
        }
    },
    {
        file: "Cave_of_Altamira_and_Paleolithic_Cave_Art_of_Northern_Spain-110113.jpg",
        name: "Animals",
        description: "Cave Paintings of Altamira, Spain",
        dimensions: {
            width: 1417,
		    height: 1417
        }
    },
    {
        file: "Laas_Geel.jpg",
        name: "Animals",
        description: "Cave Paintings of Laas Geel",
        dimensions: {
            width: 500,
		    height: 333
        }
    },
    {
        file: "2009_07_09_camino_cielo_paradise_137.jpg",
        name: "Geometric Shapes",
        description: "Camino Cielo Paradise",
        dimensions: {
            width: 3504,
		    height: 2336
        }
    },
    {
        file: "Serra_da_Capivara_-_Several_Paintings_2b.jpg",
        name: "People and Animals",
        description: "Cave Paintings in Serra da Capivara",
        dimensions: {
            width: 2295,
		    height: 1512
        }
    }
];

//#endregion
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//#region   UP&DOWN ARROW KEY - EVENT LISTENER - FUNSTIONS

// GLOBAL VARIABLES
imgIndex = 0; // Global variable declaration and initialization for the image index in the array
var currentIndex;

// UP&DOWN ARROW KEY - EVENT LISTENER - FUNSTIONS
document.body.onkeydown = function(keyEvent)    // Assaigning an Anoniomus function
{
    var charCode = (keyEvent.which) ? keyEvent.which : keyEvent.keyCode;
    console.log(charCode)

    if(charCode == 38)  // Up-arrow key pressed
    {
        if (imgIndex == 0)
        {
            imgIndex = 9;
        }
        else
        {
            imgIndex -= 1;
        }
        fUpNDownKey(imgIndex)

        console.log('Up-arrow key pressed')
    }

    if(charCode == 40)  // Down-arrow key pressed
    {
        if (imgIndex == 9)
        {
            imgIndex = 0;
        }
        else
        {
            imgIndex += 1;
        }
        fUpNDownKey(imgIndex)

        console.log('Down-arrow key pressed')
    }
    // alert(String.fromCharCode(e.keyCode)+" --> "+e.keyCode);
};

//#endregion
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//#region   UP&DOWN ARROW KEY & RESIZE IMAGE - FUNCTIONS

// UP&DOWN ARROW KEY - FUNCTIONS
function fUpNDownKey(objF)
{
    // SLIDE IMAGE
    console.log('From fUpNDown')
    // SizeImage(objF);
    
    var my_image = images[parseInt(objF)];
    my_image = resizeImage(my_image,800,700);
    // setTimeout(resizeImage, 1000,my_image,800,700);

    var expandImg = document.getElementById("expandedImg"); // Find the ID "expandedImg"
    expandImg.src = my_image.file;
    expandImg.width = my_image.dimensions.width;
    expandImg.height = my_image.dimensions.height;
    
    
    // setTimeout(expandImg.width = 800, 3000);
    // expandImg.src = images[parseInt(objF)].file;    // !Load an image from the "images" array to the presentation container
    // expandImg.parentElement.style.display ="block"; // Apply style to a loaded image

    // IMAGE INFO
    var imgText = document.getElementById("imgInfo"); // Find the ID "imgInfo"
    imgText.innerHTML = `${images[parseInt(objF)].name}<br/>${images[parseInt(objF)].description}`;    // !Load image info from the "images" array to the image info field

    // THUMBNAIL IMAGE
    var thumbIndex = document.getElementById(objF); // Find a thumbnail with specified ID
    fThumbOnMouseEnter(thumbIndex);    // Load a thumbnail as if it's hovered over with a mouse

    setTimeout(fThumbOnMouseLeave(thumbIndex), 1000);

    if (objF != currentIndex) {
        fThumbOnMouseLeave(thumbIndex);
        currentIndex = objF;
    }
    else{
        fThumbOnMouseEnter(thumbIndex);
    }
   
    fThumbOnMouseLeave(thumbIndex);   // Leave a previously selected thumbnail as if a mouse cursor left it
}

// RESIZE IMAGE - FUNCTIONS
function resizeImage(image,width,height){
    var koef = 0.0000;
    if (image.dimensions.width > image.dimensions.height) {
        if (image.dimensions.width >= 800){
            console.log('Width more')
            koef = 800/image.dimensions.width;
            image.dimensions.width = 800;
            console.log(koef);
            image.dimensions.height = image.dimensions.height * koef;
        }
        if(image.dimensions.width < 800){
            
            koef = 800/image.dimensions.width;
            image.dimensions.width = 800;
            console.log(koef);
            image.dimensions.height = image.dimensions.height * koef;
        }

        // image.dimensions.width = image.dimensions.height * (800 / 700);
         // set size proportional to image
        // canvas.height = canvas.width * (img.height / img.width);
        
        // image.dimensions.width = width;
        // image.dimensions.height = height;
    }
    if(image.dimensions.width <= image.dimensions.height){
        // image.dimensions.width = width;
        console.log('Height bigger')
        if (image.dimensions.height >= 700){
            console.log('More');
           
            koef = 700/image.dimensions.height;
            image.dimensions.height = 700;

            console.log('koef');
            console.log(koef);
            image.dimensions.width = image.dimensions.width * koef;
            console.log(image.dimensions.width)
        }
        if(image.dimensions.height < 700){
            console.log('LESS')
            
            koef = 700/image.dimensions.height;
            image.dimensions.height = 700;
            image.dimensions.width = image.dimensions.width * koef;
        }

    }

    console.log(image.dimensions.width)
    return image;
}

//#endregion
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//#region   EXPAND IMAGE - FUNCTIONS 

// EXPAND IMAGE - FUNCTIONS                                                        // https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
function fExpandImage(objE)     // LOAD SLIDE: This function loads a big page image and its description from the array when a relevant thumbnail is clicked                             
{
    // 1. Get the expanded image (Find the element with this ID in the file and and create a shortcut to this function in a new variable)
    // var expandImg = document.getElementById("expandedImg"); // Find the ID "expandedImg"

    // 2. Get the image text (Find the element with this ID in the file and and create a shortcut to this function in a new variable)
    var imgText = document.getElementById("imgInfo"); // Find the ID "imgInfo"
    
    //var arrayIndex = objX.index;

    // 3-1. Option 3-1: Use the same src in the expanded image as the image being clicked on from the grid
    // expandImg.src = objX.src;
    // 3-2. Option 3-2: Use the same src in the expanded image as the relevant array member
    // expandImg.src = images[parseInt(objE.id)].file;    // !Load an image from the "images" array to the presentation container
    var my_image = images[parseInt(objE)];
    my_image = resizeImage(my_image,800,700);
    var expandImg = document.getElementById("expandedImg"); // Find the ID "expandedImg"
    expandImg.src = my_image.file;
    expandImg.width = my_image.dimensions.width;
    expandImg.height = my_image.dimensions.height;
    // lblResult2.innerHTML = PLArray[parseInt(objIndex.value)];

    // 4-1. Option 4-1: Use the value of the alt or title attribute of the clickable image as text inside the expanded image
    // imgText.innerHTML = objX.title;
    // imgText.innerHTML = `${objX.title}<br />${objX.description}<br />${objX.width}<br />${objX.height}`;
    // imgText.innerHTML = `${images[objX.index].name}<br />${images[objX.index].description}<br />${images[objX.index].width}<br />${images[objX.index].height}`;
    // 4-2. Option 4-2: Use the value of the description attribute of the relevant array member as text inside the expanded image
    // imgText.innerHTML = images[parseInt(objX.alt)].description;
    imgText.innerHTML = `${images[parseInt(objE)].name} <br/> ${images[parseInt(objE)].description}`;
    // imgText.innerHTML = `${images[parseInt(objE.id)].name} <br/> ${images[parseInt(objE.id)].description}`;    // !Load image info from the "images" array to the image info field
    // 5. Show the container element (hidden with CSS)
    // expandImg.parentElement.style.display = "block" ; // Apply style to a loaded image
}

//#endregion
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//#region   LOAD A HOME PAGE & HOVER A MOUSE CURSOR - FUNCTIONS

// CLEAN A FIELD - FUNCTION
function fCleanUp()    // CLEANS: This function cleans up the data after the previously loaded image
{
    expandedImg.innerHTML = "";
}

// LOAD A HOME PAGE IMAGE - FUNCTIONS
function fHomePgImgWInfo()   // HOME PAGE IMAGE: This function loads the home page image and its description on page load
{
    var expandImg = document.getElementById("expandedImg"); // Find the ID "expandedImg"
    var imgText = document.getElementById("imgInfo"); // Find the ID "imgInfo"
    
    var my_image = images[parseInt(0)];
    my_image = resizeImage(my_image,800,700);
    expandImg.src = my_image.file;    // !Load the first image (index [0]) from the "images" array to the presentation container
    expandImg.width = my_image.dimensions.width;
    expandImg.height = my_image.dimensions.height;
    imgText.innerHTML = `${my_image.name} <br/> ${my_image.description}`;    // !Load image info from the "images" array to the image info field
    expandImg.parentElement.style.display = "block"; // Apply style to a loaded image
}

// HOVER A MOUSE CURSOR - FUNCTIONS
function fThumbOnMouseEnter(objA)   // MOVES THUMBNAIL: This function MOVES a THUMBNAIL when a mouse cursor hovers over a thumbnail
{
    if (document.getElementById(objA.id).style.float=='right')
    {
        document.getElementById(objA.id).style.float='left'; 
    }

    else if (document.getElementById(objA.id).style.float=='left')
    {
        document.getElementById(objA.id).style.float='right';
    }

    else
    {
        document.getElementById(objA.id).style.cssText="float: right";
    }
}


function fThumbOnMouseLeave(objB)   // RETURNS THUMBNAIL: This function RETURNS a THUMBNAIL to its previous position when a mouse cursor leaves a thumbnail
{
    document.getElementById(objB.id).style.float = (document.getElementById(objB.id).style.float == "right") ? "left" : "right";
}

/*
// CURSOR-to-POINTER WHEN HOVERING - FUNCTIONS

function fPtrOnMouseEnter(objC)   // CURSOR-to-POINTER: This function changes a standard mouse cursor to a POINTER when a mouse cursor hovers over a thumbnail
{
    document.getElementById(objC.id).style='cursor:pointer';
}


function fPtrOnMouseLeave(objD)   // POINTER-to-CURSOR: This function changes a pointer to the STANDARD mouse cursor when a mouse cursor leaves a thumbnail
{
    document.getElementById(objD.id).style.float = (document.getElementById(objD.id).style.float == "right") ? "left" : "right";
}
*/

//#endregion
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////OLEG SAVELEV/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////WEB222 Assignment #3/////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////JavaScript Functions/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
