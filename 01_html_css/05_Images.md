# 05 Images

```css
   .logo {width:150px;
          height:250px;
   }
```

```html
   <img src="images/kitten.jpg alt="A Kitten">
```

## Image Formats

* jpg 
    * For photos
    * Loses some detail every time it is edited.
    * Not good for diagrams with stark color borders
    * Can get "jpg artifacts"
    * No transparent background
* png 
    * Lossless
    * Photographs are larger than jpg for photos
    * Best for things like screenshots and diagrams with sharp edges and lots of colors
    * May have transparent background
* gif
    * Old format, largely replace by png
    * Very compact, but limited to about 150 colors
* svg
    * Some browsers support it, but not all
    * Best for variable sized images
    * Often converted to a .png file for a specific webpage.

## Best practices

* The actual size of the image should be the same as the desired display size (Don't force the user to download a big image for a small image on the screen)
* Put the image in a container, and size the container
* Put all the images in an images directory
* Always include the alt= attribute (federal law in the US)
* Specify the height and width in CSS, not in the img tag itself.