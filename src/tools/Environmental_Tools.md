# Environmental Tools

The list below includes all of the Environmental Tools developed by each team in the class. They all follow a similar temple to keep documentation standardized.

<!--NEW TOOL BELOW-->

## Sufficient Daylight Hour Tool
<!--add your title on the first line above-->

#### Tool Author: Food Oasis 

<!--add your summary image here, try to make it explanatory of what the tool does, not just what the output looks like. For example, exposure a part of the analysis geometry. An animated GIF can also be used to explain how the tool is working-->

![description](../images/tools/Sufficent_Daylight_Hour_Tool_01.jpg)

<!-- ![description of image](XIM-GSAPP-Fa20/src/tools/Environmental/Average_Daylight/files/sufficient Daylight Hour Tool 01.jpg) -->

### Description

<!--add your description below-->

This tool analyzes average daylight hours of exterior horizontal spaces that can be used as garden hours. Then it dispatches the surfaces with sufficient amount of daylight to a vegetable type.

### How To Use

<b>Step by Step Instructions:</b>

1. Right click on "Geo: Lots" -> Select Multiple and select lot areas for towers.
2. Toggle between 'Tower Type' and 'FAR' to get desired shape and size.
2. Link to epw file
2. Right click on "Context" -> Select Multiple and select building obstructions.
3. Adjust 'Analysis Resolution', 'Start Time', 'End time', 'Day', and 'Month' accordingly to your analysis.
5. Adjust 'Min Hour Threshold'.
6. Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.


<b> Troubleshooting </b>

Make sure to properly load the context as it is crucial for to test the daylight hours correctly

Make sure all the inputs have been loaded correctly.

<!--add a list your downloadable links below with "link " appended to the beginning. You should have sample rhino + grasshopper files and a legend-->

![description](../images/tools/Sufficent_Daylight_Hour_Tool_02.jpg)

<!-- ![description of image](XIM-GSAPP-Fa20/src/tools/Environmental/Average_Daylight/files/sufficient Daylight Hour Tool 02.jpg) -->

### Modeling Standards
<!--Revise for specific modeling requirements for you analysis to run properly. If useful, add an image of properly vs improperly model geometry-->
<b>Please follow the following Rhino standards to ensure the proper functionality of the tool: </b>


<input type="checkbox"> <b>My test curve is a single CLOSED polyline.</b>

  <li>Try "SelClosedCrv" to make sure it is closed.</li>

<input type="checkbox"> <b>My model is oriented to True North.</b>

  <li>Re-orient if it was rotated off of North at the start of the project.</li>

<input type="checkbox"> <b>Any groups or blocks in building context have been ungrouped.</b>

  <li>Try "SelBlockInstance" and "SelGroup" to make sure.</li>

<input type="checkbox"> <b>My model is set to either Meters or Feet (not mm or in).</b>

<input type="checkbox"> <b>My model is free of overlapping, coplanar, or intersecting geometry.</b>

<input type="checkbox"> <b>Any obstructions around the space have been modeled (trees, topography, buildings).</b>

<input type="checkbox"> <b>Any curved surfaces in the model have been simplified to individual flat planes.</b>


### Sources, Calculations + Metrics
<!--add text and/or images for any sources for you metrics, calculations & equations, assumptions and specific metric output-->
This tool extracts exterior horizontal spaces and turns them into garden areas. It calculates the amount of sunlight each of those surfaces receive, and then dispatches the surfaces that receive sufficient daylight to a specific vegetable type. The vegetable types are already predetermined but it can be changed.

### Limitations & Context
<!--add text and/or images that expose potential for bias by stating limitations (ie what does this tool not do,) and the context in which it was created.-->

The limitation of the tool is that it does not take into consideration the climate necessary for vegetable growth. It only calculates if the areas receive sufficient daylight.

### Examples
<!--add images and text to describe a use case below-->
Here is how we used this tool on a project!

![description](../images/tools/Sufficent_Daylight_Hour_Tool_03.jpg)

<!-- ![description of image](XIM-GSAPP-Fa20/src/tools/Environmental/Average_Daylight/files/sufficient Daylight Hour Tool 03.jpg) -->

### Required Files

[Rhino File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Average_Daylight/files/Sufficent%20Daylight%20Hour%20Tool.3dm)

[Grasshopper File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Average_Daylight/files/Sufficient%20Daylight%20Hour%20Tool.gh)



<!--NEW TOOL BELOW-->

## Beneficial Daylight for Facades Analysis Tool

#### Tool Author: Energy Efficient Communities Team

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/T-MAIN%20PHOTO2.jpg)

### Tool Description

This analysis tool explores building in winter and summer sunlight time. In consideration of energy consumption, the building should reduce direct sunlight in summer as much as possible to prevent heat, and increase direct sunlight in winter to ensure insulation. Area that meets both summer shading and winter lighting can be understood as a sustainable area. This Analysis Tool visualizes the distribution of these sustainable areas.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/T-battery.png)

### Required inputs

1. Dynamic: Context Mesh: merge context and target buildings into meshes

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/T-mesh%20context.jpg)

2. Static:

(1)Building Surface Subdivision Number: this input data should not larger than 50.

(2)Winter Sun Path

(3)Winter sunrise and sunset time domain

(4)Winter Sunlight Hours Threshold: 3

(5)Summer Sun Path

(6)Summer sunrise and sunset time domain

(7)Summer Sunlight Hours Threshold: 6

### Tool Rules

1. With sun path and sunlight time Domain, the battery output two groups of data about energy consumption based on the current building: Winter Sunlight Hours and Summer Shadow Hours. For winter, the sunlight time on the winter solstice is about 3hours. We think that “winter sun > 3hours/day” is relatively ideal. For summer, we arrange the sunlight time in order, ensuring enough shadow in summer. we think that “summer sun < 6hours/day”is beneficial.
2. "Sustainable Facade " in output data indicates the percentage of the facade area that meets both “winter sun > 3hours/day” and “summer sun < 6hours/day”.
3. Area that meets both summer shading and winter lighting can be understood as a sustainable area. “Mesh Analysis” visualizes the distribution of these sustainable areas.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/T-SUBDIVISION.jpg)

### Modeling Standards

1. Please follow the following Rhino standards to ensure the proper functionality of the tool:
2. Model is oriented to True North.
3. Model is set to either Meters or Feet (not mm or in).
4. Model is free of overlapping, coplanar, or intersecting geometry.
5. Any obstructions around the space have been modeled (trees, topography, buildings).
6. Any curved surfaces in the model have been simplified to individual flat planes.
7. Any surrounding context has been made into a single, joined mesh.

### Limitations & Context

1.The current sunshine information is in New York. If you want to apply to other cities, please link the correct Sun Path Curve and sunrise/ Sunset Domain.
2.The analysis tool doesn't measure the building energy.

### Required Plugins

No specific plugins necessary

### Required Files

[Rhino File](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Average_Daylight/Beneficial%20Daylight%20for%20Facades%20Analysis%20Tool.3dm)

[Grasshopper File](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Average_Daylight/Beneficial%20Daylight%20for%20Facades%20Analysis%20Tool.gh)

<!--NEW TOOL BELOW-->

## The Public Space Average Daylight

#### Tool Author: The Great Outdoors

<!--add your title on the first line above-->
### Type Description


![description](../images/tools/public_space_daylight4.png)


![description](../images/tools/public_space_daylight3.png)


![description](../images/tools/public_space_daylight2.png)


![description](../images/tools/public_space_daylight1.png)

### Required inputs

Description to be added

### Type Rules

Description to be added

### Use Type If:

Description to be added

### Not Recommended to Use Type If:

Description to be added

### What to Know & Limitations

Description to be added

### Required Plugins

N/A

#### How To Use

Description to be added

### Required Files

[Rhino File](https://github.com/tterrytang/the-great-outdoor/blob/main/The%20Great%20Outdoors%20(1).3dm)

[Grasshopper File](https://github.com/tterrytang/the-great-outdoor/blob/main/great%20out%20door%20building%20types.gh)

<!--NEW TOOL BELOW-->

## Interior Light Tool

#### Tool Author: Food Oasis


![interior light 00](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight01.png)

### Description

This tool measures the amount of light coming in on the facades of buildings into the living spaces. Use this to evaluate the amount of light and degree of comfort a person in the building might have.

### How To Use

1. Create a solid union and the deconstruct the design.
1. Evaluate the surfaces and deconstruct the vectors into their component parts.
2. Cull the Z vectors to remove the tops and bottoms from the analysis.
3. Subdivide the remaining surfaces.
4. Move the divided surfaces that you want to analyze away from the buildings.
5. Evaluate the points and normal vectors of the subdivided surfaces and move those away from the building as well.
6. Merge the building and context breps and transform them into a mesh.
7. Join the mesh and right click to label as a mesh obstruction.
8. Create a line segment from the analysis points and normal vectors.
9. Bring the line components and mesh obstructions into an IsoVist Ray.
10. Divide the distance by the desired radius of context from the points that will impact the amount of light each surface panel can receive. This will be the number score per panel that will show how much light the facades are getting.
11. Take the same result and do a mass addition of the numbers to test, as well as create a list length. Divide the mass addition by the list length to find the percent threshold to measure with.
12. Average the scores per panel.
13. Use the scores per panel as the parameter on the color gradient to apply to the surface panel geometries.
14. Review the visual and metric outputs.

![Interior Light gh image](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight02.png)


#### Troubleshooting

Make sure to properly evaluate the normal vectors and amplitude so the color gradients show up on the exterior and not the interior of the buildings.

Change the multiplication factor number that you move the subsurfaces by to make sure they are offset far enough from the building so the colors can be seen.


#### Required Files

[Rhino File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.3dm)

[Grasshopper File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.gh)


![Select Context and Design](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight03.png)

![Subdivide the Facade](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight04.png)

![IsoVist Ray](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight05.png)

<br />


### Modeling Standards

<b>Please follow the following Rhino standards to ensure the proper functionality of the tool: </b>


<input type="checkbox"> <b>My test massing is a single, simplified, CLOSED polysurface.</b>

  <li>Try "SelClosedSrf" to make sure it is closed.</li>

<input type="checkbox"> <b>My model is oriented to True North.</b>

  <li>Re-orient if it was rotated off of North at the start of the project.</li>

<input type="checkbox"> <b>Any groups or blocks in the model have been ungrouped/exploded.</b>

  <li>Try "SelBlockInstance" and "SelGroup" to make sure.</li>

<input type="checkbox"> <b>My model is set to either Meters or Feet (not mm or in).</b><br>

<input type="checkbox"> <b>My model is free of overlapping, coplanar, or intersecting geometry.</b><br>

<input type="checkbox"> <b>Any obstructions around the space have been modeled (trees, topography, buildings).</b><br>

<input type="checkbox"> <b>Any curved surfaces in the model have been simplified to individual flat planes.</b><br>

<input type="checkbox"> <b>Any surrounding context has been made into a single, joined mesh.</b>

### Sources, Calculations + Metrics

<p>This tool uses this method of calculating light obstructed from other buildings. The metric is derived this manner.</p>


### Limitations & Context

This tool measures light but it is not specific to the time of day or season. This tool shows surfaces that are not blocked by other buildings as receiving more light, as they would at any time of the year.

### Examples

Here is how we used this tool on a project!

To determine if the rooms of a building will be getting too much or too little light on average.
To determine if building placement is too obstructive for potential residents and needs to be changed.



<!--NEW TOOL BELOW-->

## Solar Proxy

#### Tool Author: NEWtral Urbanism 

<!--add your title on the first line above-->

<!--add your summary image here, try to make it explanatory of what the tool does, not just what the output looks like. For example, exposure a part of the analysis geometry. An animated GIF can also be used to explain how the tool is working-->

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Solar%20Proxy/file/tool-1.jpg)

<!-- ![description of image](/XIM-GSAPP-Fa20/images/tool_example_2.jpg) -->

### Description

<!--add your description below-->

This tool is related to the solar energy generation on building facades and roofs aiming to simulate the real PV Panel solar production by a less time-consuming proxy.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Solar%20Proxy/file/tool-4.JPG)

### How To Use

<b>Step by Step Instructions:</b>

1. Link to EPW file
2. Build a new folder in your computer and copy the path into the new folder path panel.
3. Click the Button if this is your first time run this file, or you change the EPW file.
4. Right click on "Context" -> Select Multiple and select context massing.
5. Right click on "Massing to analyze" -> Select Multiple and select designed massing.
6. Adjust surface analysis resolution. (Larger, faster)
7. Choose which part you want to analyze -> 'facade', 'roof' or 'facade and roof'.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Solar%20Proxy/file/tool-2.jpg)

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

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Solar%20Proxy/file/regression.png)

### Limitations & Context
<!--add text and/or images that expose potential for bias by stating limitations (ie what does this tool not do,) and the context in which it was created.-->

The tool is still under development. We are still trying to figure out the correlations between Solar Radiation and PV Panel production. Since PV Simulation is an extremely time-consuming tool, then we used this proxy tool to approximate the real solar production.

### Examples
<!--add images and text to describe a use case below-->
Here is how we used this tool on a project!

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Solar%20Proxy/file/tool-5.JPG)


### Required Plugins

1. Pufferfish
2. Archsim

### Required Files

[Rhino File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/blob/main/src/tools/Environmental/Solar%20Proxy/file/solarProxy.3dm)

[Grasshopper File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/blob/main/src/tools/Environmental/Solar%20Proxy/file/solarProxy.gh)


<!--NEW TOOL BELOW-->

## Wind Analysis Tool

#### Tool Author: Breathing Blocks

<!--add your title on the first line above-->

<!--add your summary image here, try to make it explanatory of what the tool does, not just what the output looks like. For example, exposure a part of the analysis geometry. An animated GIF can also be used to explain how the tool is working-->

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_WindAnalysis1.png)

<!-- ![description of image](/XIM-GSAPP-Fa20/images/tool_example_2.jpg) -->

### Description

<!--add your description below-->
**Custom wind analysis tool that measures optimal conditions for wind airflow and generates a street hierarchy of air flow uses.** It identifies ***primary streets*** on each iterative scenario in relation to the primary wind direction, sorting those that are within 30 degrees or less of separation from the desired wind direction axis. The tool then analyzes every ***secondary street*** directly related to the relevant primary streets and measures their angle of intersection. **Required plugins include Pufferfish and Human.**

### How To Use

<b>Step by Step Instructions:</b>
1. Define primary and secondary wind channels.
2. Set the appropriate curves for primary and secondary channels relative to the logic outlined in the main “Breathing Blocks” page. 
3. Define the main wind direction axis based on your analysis of the dominant wind source in your site.
4. Set a curve, oriented in the same angle, as the primary wind direction in every appropriate group. 
5. If needed, modify the angle of variation between the main wind direction axis and primary and secondary channels.
6. Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/WindAnalysis/Wind_Analysis_Script.png)

<b> Troubleshooting </b>
1. Make sure to load the street curves appropriately: confirm that the curves are planar. This is crucial to the appropriate extraction of information and calculation of intersection by the script. The tool will not produce any results if primary and secondary streets do not intersect.
2. Confirm that the definition of curves is consistent with the desired hierarchy of streets.
3. Confirm that curves relating to each street type are set appropriately across the script.
4. If needed, modify the offset distance for the primary and secondary channel breps.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_WindAnalysis2.png)

### Modeling Standards
<!--Revise for specific modeling requirements for you analysis to run properly. If useful, add an image of properly vs improperly model geometry-->
<h5>Please follow the following Rhino standards to ensure the proper functionality of the tool:</h5>
<br>

<input type="checkbox"> <b>Please installe these plugi-ns for your wind analysis: Pufferfish, Human.</b>
<input type="checkbox"> <b>My model is oriented to True North.</b>
  <li>Re-orient if it was rotated off of North at the start of the project.</li>
<input type="checkbox"> <b>Your model must contain planar curves.</b>
<input type="checkbox"> <b>Any surrounding context has to be a single, joined mesh.</b> <br>

<!-- ![description of image](/XIM-GSAPP-Fa20/images/tool_example_2.jpg) -->

### Sources, Calculations + Metrics
<!--add text and/or images for any sources for you metrics, calculations & equations, assumptions and specific metric output-->
1. Primary and secondary street intersectionality relative to wind speed reduction. 
2. Feasibility for any given street as primary channel for pollution airflow. 
3. Optimal location of development lot relative to primary or secondary streets.


### Examples
We used this tool to study pollution in the Bronx; pollution can be carried at a higher speed through primary streets, which will shelter comunal pedestrian spaces within the blocks by decreasing wind flow on secondary streets. The resulting percentage of airflow reduction for each street type facilitates comparison of each iterative scenario. 

<!--add a list your downloadable links below with "link " appended to the beginning. You should have sample rhino + grasshopper files and a legend-->