# Wind Analysis Tool
<!--add your title on the first line above-->

<!--add your summary image here, try to make it explanatory of what the tool does, not just what the output looks like. For example, exposure a part of the analysis geometry. An animated GIF can also be used to explain how the tool is working-->

![description](../images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_WindAnalysis1.png)

<!-- ![description of image](/XIM-GSAPP-Fa20/images/tool_example_2.jpg) -->

#### Description

<!--add your description below-->
**Custom wind analysis tool that measures optimal conditions for wind airflow and generates a street hierarchy of air flow uses.** It identifies ***primary streets*** on each iterative scenario in relation to the primary wind direction, sorting those that are within 30 degrees or less of separation from the desired wind direction axis. The tool then analyzes every ***secondary street*** directly related to the relevant primary streets and measures their angle of intersection. **Required plugins include Pufferfish and Human.**

#### How To Use

<b>Step by Step Instructions:</b>
1. Define primary and secondary wind channels.
2. Set the appropriate curves for primary and secondary channels relative to the logic outlined in the main “Breathing Blocks” page. 
3. Define the main wind direction axis based on your analysis of the dominant wind source in your site.
4. Set a curve, oriented in the same angle, as the primary wind direction in every appropriate group. 
5. If needed, modify the angle of variation between the main wind direction axis and primary and secondary channels.
6. Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.

![description](../images/Wind_Analysis_Script.png)

<b> Troubleshooting </b>
1. Make sure to load the street curves appropriately: confirm that the curves are planar. This is crucial to the appropriate extraction of information and calculation of intersection by the script. The tool will not produce any results if primary and secondary streets do not intersect.
2. Confirm that the definition of curves is consistent with the desired hierarchy of streets.
3. Confirm that curves relating to each street type are set appropriately across the script.
4. If needed, modify the offset distance for the primary and secondary channel breps.

![description](../images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_WindAnalysis2.png)

#### Modeling Standards
<!--Revise for specific modeling requirements for you analysis to run properly. If useful, add an image of properly vs improperly model geometry-->
<h5>Please follow the following Rhino standards to ensure the proper functionality of the tool:</h5>
<br>

<input type="checkbox"> <b>Please installe these plugi-ns for your wind analysis: Pufferfish, Human.</b>
<input type="checkbox"> <b>My model is oriented to True North.</b>
  <li>Re-orient if it was rotated off of North at the start of the project.</li>
<input type="checkbox"> <b>Your model must contain planar curves.</b>
<input type="checkbox"> <b>Any surrounding context has to be a single, joined mesh.</b> <br>

<!-- ![description of image](/XIM-GSAPP-Fa20/images/tool_example_2.jpg) -->

#### Sources, Calculations + Metrics
<!--add text and/or images for any sources for you metrics, calculations & equations, assumptions and specific metric output-->
1. Primary and secondary street intersectionality relative to wind speed reduction. 
2. Feasibility for any given street as primary channel for pollution airflow. 
3. Optimal location of development lot relative to primary or secondary streets.


#### Examples
We used this tool to study pollution in the Bronx; pollution can be carried at a higher speed through primary streets, which will shelter comunal pedestrian spaces within the blocks by decreasing wind flow on secondary streets. The resulting percentage of airflow reduction for each street type facilitates comparison of each iterative scenario. 

<!--add a list your downloadable links below with "link " appended to the beginning. You should have sample rhino + grasshopper files and a legend-->
link Wind_Analysis.gh
This tool uses this method of calculating X from this source. The metric is derived in this manner. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

#### Limitations & Context
<!--add text and/or images that expose potential for bias by stating limitations (ie what does this tool not do,) and the context in which it was created.-->

This tool does X it does not do Z and Y. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

#### Examples
<!--add images and text to describe a use case below-->
Here is how we used this tool on a project! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

![description](../images/tool_example_2.jpg)

<!-- ![description of image](/XIM-GSAPP-Fa20/images/tool_example_2.jpg) -->

Some more text here perhaps.

<b> More project examples here: </b>
