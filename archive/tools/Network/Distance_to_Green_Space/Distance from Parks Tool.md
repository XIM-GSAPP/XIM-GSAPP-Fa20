# Distance from Parks Tool

![Summary Image](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20distancetopark01.png)

### Description

This tool measures and compares the distance each building is from nearby parks.

### How To Use

1. Connect or right click the geometry parameter and set multiple geometries for the buildings you wish to measure.
1. Connect or right click the curve parameter and select the parks in your model.
2. Run the buildings through a mesh shadow command to get the outlines of the base of each building.
3. Divide the distance between the building curves and determine which set distance you want between each point. Here, we chose 50 feet.
4. Take the park curves and make them a geometry to assign it as a pull point in relation to building points created.
5. Sort the distances between the buildings and the parks and bring them into a list item to organize the distances into integers that each building is from the park.
6. Flatten the integer and connect that as the parameter to assign color values on the gradient tool.
7. Determine an integer for the desired minimum walking distance time to a park and the speed of a person walking (225 ft/min).
8. Multiply the walking distance time and the speed to get the distance threshold.
9. Use the distance threshold as the upper limit on the gradient tool. This determines whether a building is too far from the park or not. Set the lower limit as 1.
10. Apply the building breps as the geometry and the gradient as the material to preview the visual analysis.
11. Review the visual and metric outputs. Does it look correct? Common issues below

![gh image](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20distancetopark02.png)


#### Troubleshooting

Make sure the assigned time for walking is what is needed for your design. A lower or higher number will change the requirements for the color assignments.


#### Required Files

[Rhino File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.3dm)

[Grasshopper File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.gh)


![Set park curves](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20distancetopark03.png)
![Pull point](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20distancetopark04.png)
![Assign color values](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20distancetopark05.png)

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

<p>This tool uses pull points to calculate distance from parks. The metric is derived the distance that each point on the building is from the park.</p>

### Limitations & Context

This tool measures distance but is not specific to all types of mobile ability. The distances can be continuously adjusted and tested by moving or choosing different parks.

### Examples

Here is how we used this tool on a project!

To determine if all the buildings are close enough to an amenity to be convenient for a person on the property to get to and use.
To determine if parks are being placed in the right locations and if there are enough amenities in the area.
