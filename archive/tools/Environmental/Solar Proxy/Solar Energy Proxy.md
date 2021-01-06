# Solar Proxy
<!--add your title on the first line above-->

<!--add your summary image here, try to make it explanatory of what the tool does, not just what the output looks like. For example, exposure a part of the analysis geometry. An animated GIF can also be used to explain how the tool is working-->

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/blob/main/src/tools/Environmental/Solar%20Proxy/file/tool-1.jpg)

<!-- ![description of image](/XIM-GSAPP-Fa20/images/tool_example_2.jpg) -->

### Description

<!--add your description below-->

This tool is related to the solar energy generation on building facades and roofs aiming to simulate the real PV Panel solar production by a less time-consuming proxy.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/blob/main/src/tools/Environmental/Solar%20Proxy/file/tool-4.JPG)

### How To Use

<b>Step by Step Instructions:</b>

1. Link to EPW file
2. Build a new folder in your computer and copy the path into the new folder path panel.
3. Click the Button if this is your first time run this file, or you change the EPW file.
4. Right click on "Context" -> Select Multiple and select context massing.
5. Right click on "Massing to analyze" -> Select Multiple and select designed massing.
6. Adjust surface analysis resolution. (Larger, faster)
7. Choose which part you want to analyze -> 'facade', 'roof' or 'facade and roof'.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/blob/main/src/tools/Environmental/Solar%20Proxy/file/tool-2.jpg)

<!-- ![description of image](/XIM-GSAPP-Fa20/images/grasshopper_tree.JPG) -->

<b> Troubleshooting </b>

Make sure to link to the right EPW file first and click the button.

Please add relevant plugins to your library for easy usage.

<!--add a list your downloadable links below with "link " appended to the beginning. You should have sample rhino + grasshopper files and a legend-->

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

<input type="checkbox"> <b>My model is set to Feet (not mm or in).</b> <br>

<input type="checkbox"> <b>My model is free of overlapping, coplanar, or intersecting geometry.</b><br>

<input type="checkbox"> <b>Any obstructions around the space have been modeled (trees, topography, buildings).</b><br>

<input type="checkbox"> <b>Any curved surfaces in the model have been simplified to individual flat planes.</b><br>

### Sources, Calculations + Metrics
<!--add text and/or images for any sources for you metrics, calculations & equations, assumptions and specific metric output-->
This tool uses this method of calculating approximately PV energy generation.
1. We calculate the solar energy production of a basic surface to get the acceptable PV efficiency (85%) per sq ft.
2. Then we get hours for the 10th and 20th for every month from 6am to 8pm.
3. Next we use Archsim to get a proxy of annual solar radiation.
4. We take a 90% of the upper bounds of the result.
5. We multiply the surfaces' area above the threshold with the acceptable PV efficiency (85%) per sq ft, thus get the approximate PV Panel energy generation value.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/blob/main/src/tools/Environmental/Solar%20Proxy/file/regression.png)

### Limitations & Context
<!--add text and/or images that expose potential for bias by stating limitations (ie what does this tool not do,) and the context in which it was created.-->

The tool is still under development. We are still trying to figure out the correlations between Solar Radiation and PV Panel production. Since PV Simulation is an extremely time-consuming tool, then we used this proxy tool to approximate the real solar production.

### Examples
<!--add images and text to describe a use case below-->
Here is how we used this tool on a project!

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/blob/main/src/tools/Environmental/Solar%20Proxy/file/tool-5.JPG)


### Required Plugins

1. Pufferfish
2. Archsim

### Required Files

[Rhino File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/blob/main/src/tools/Environmental/Solar%20Proxy/file/solarProxy.3dm)

[Grasshopper File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/blob/main/src/tools/Environmental/Solar%20Proxy/file/solarProxy.gh)
