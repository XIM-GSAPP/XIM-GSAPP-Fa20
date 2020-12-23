# Interior Light Tool


![interior light 00](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight01.png)

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

![Interior Light gh image](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight02.png)


#### Troubleshooting

Make sure to properly evaluate the normal vectors and amplitude so the color gradients show up on the exterior and not the interior of the buildings.

Change the multiplication factor number that you move the subsurfaces by to make sure they are offset far enough from the building so the colors can be seen.


#### Required Files

[Rhino File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.3dm)

[Grasshopper File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.gh)


![Select Context and Design](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight03.png)
![Subdivide the Facade](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight04.png)
![IsoVist Ray](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight05.png)

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
