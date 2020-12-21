# Solar Proxy
<!--add your title on the first line above-->

<!--add your summary image here, try to make it explanatory of what the tool does, not just what the output looks like. For example, exposure a part of the analysis geometry. An animated GIF can also be used to explain how the tool is working-->

![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Solar%20Proxy/tool-1.jpg)

<!-- ![description of image](/XIM-GSAPP-Fa20/images/tool_example_2.jpg) -->

### Description

<!--add your description below-->

This tool is related to the solar energy generation on building facades and roofs aiming to simulate the real PV Panel solar production by a less time-consuming proxy.

### How To Use

<b>Step by Step Instructions:</b>

1. Link to EPW file
2. Build a new folder in your computer and copy the path into the new folder path panel.
3. Click the Button if this is your first time run this file, or you change the EPW file.
4. Right click on "Context" -> Select Multiple and select context massing.
5. Right click on "Massing to analyze" -> Select Multiple and select designed massing.
6. Adjust surface analysis resolution. (Larger, faster)
7. Choose which part you want to analyze -> 'facade', 'roof' or 'facade and roof'.

![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Solar%20Proxy/tool-2.jpg)

<!-- ![description of image](/XIM-GSAPP-Fa20/images/grasshopper_tree.JPG) -->

<b> Troubleshooting </b>

Make sure to link to the right EPW first.

Please add relevant plugins to your library for easy usage.

<!--add a list your downloadable links below with "link " appended to the beginning. You should have sample rhino + grasshopper files and a legend-->

link Analysis Tool Example.gh
link grasshopper_tree.jpg
link Analysis Tool Example.ai
![description](../files/Analysis Tool Example.3dm)

![description](../images/tool_example_4_.jpg)

<!-- ![description of image](/XIM-GSAPP-Fa20/images/tool_example_4_.jpg) -->

### Modeling Standards
<!--Revise for specific modeling requirements for you analysis to run properly. If useful, add an image of properly vs improperly model geometry-->
<b>Please follow the following Rhino standards to ensure the proper functionality of the tool:</b>


<input type="checkbox"> <b>My test massing is a single, simplified, CLOSED polysurface.</b>

  <li>Try "SelClosedSrf" to make sure it is closed.</li>

<input type="checkbox"> <b>My model is oriented to True North.</b>

  <li>Re-orient if it was rotated off of North at the start of the project.</li>

<input type="checkbox"> <b>Any groups or blocks in the model have been ungrouped/exploded.</b>

  <li>Try "SelBlockInstance" and "SelGroup" to make sure.</li>

<input type="checkbox"> <b>My model is set to either Meters or Feet (not mm or in).</b> <br>

<input type="checkbox"> <b>My model is free of overlapping, coplanar, or intersecting geometry.</b><br>

<input type="checkbox"> <b>Any obstructions around the space have been modeled (trees, topography, buildings).</b><br>

<input type="checkbox"> <b>Any curved surfaces in the model have been simplified to individual flat planes.</b><br>

<input type="checkbox"> <b>Any surrounding context has been made into a single, joined mesh.</b>

### Sources, Calculations + Metrics
<!--add text and/or images for any sources for you metrics, calculations & equations, assumptions and specific metric output-->
This tool uses this method of calculating X from this source. The metric is derived in this manner. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Limitations & Context
<!--add text and/or images that expose potential for bias by stating limitations (ie what does this tool not do,) and the context in which it was created.-->

This tool does X it does not do Z and Y. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Examples
<!--add images and text to describe a use case below-->
Here is how we used this tool on a project! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


### Required Plugins

1. Pufferfish

### Required Files

[Rhino File](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Solar%20Proxy/solarProxy.3dm)

[Grasshopper File](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Solar%20Proxy/solarProxy.gh)
