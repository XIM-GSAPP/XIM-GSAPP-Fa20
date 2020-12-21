# Radial Tower for Solar Energy

![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Radial_Tower/radialTower.jpg)

### Type Description

This type is a redesign of the existing NYCHA Building type. Generally in each building there is a central vertical circulation core and radial residential wings, the number of which depends on how many sides the parcel has. This is a very typical building of NYCHA and it is efficient in terms of spatial organization and programs distribution. The purpose of these iterations are trying to optimize the solar energy production potential of putting PV Panels on building facade.

![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Radial_Tower/ghScreenShot.png)

### Required inputs

1. Dynamic:

(1)Mega Block: It is supposed to be quadrilateral and all the parcels should be inside it.

(2)Parcels: They must be convex polygons and non-curves.

(3)FAR: The input data will determine the density of the building.

2. Static:

(1)Top-Bottom Ratio: The choices are 0.5, 0.75 and 1.

![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Radial_Tower/ratios-01.jpg)

(2)Heights Variation: The data should smaller than One Side Set Back Ratio.

![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Radial_Tower/heightsVariation.jpg)

(3)Variation Pattern: This parameter determines the direction in which the heights of buildings change.


(4)Floor to Floor Height.


### Type Rules

1. Based on typical NYCHA Housing types. It applies to convex polygon parcels.
2. It cannot apply to curving parcels.
3. The ratio of the longest edge to the shortest edge is an important parameter: if it is larger than 3 but smaller than 5, the building will have same widths’ wings; if it is smaller than 3,  the wings’ widths will be in proportion, which is relevant to the geometry of the parcel.



### Use Type If:

1. Your team has interests in the typologies of NYCHA Housing.
2. Your team has interests in studying the solar energy production potential of PV Panels on the facades.
3. Your team wants to conduct studies of sunlight, view analysis and public spaces shared by each resident in the parcel.


### Not Recommended to Use Type If:

1. Your team is more interested in more complex geometries.
2. The street grid of your team has curves.
3. You want to create a totally new type instead of transferring from the existing NYCHA types.

### What to Know & Limitations

1. There are some spatial potentials of the type: in some cases, several buildings’ wings enclose the space to become courtyards or semi-courtyards spaces.
2. If the area of the parcel is smaller than the threshold, this type won’t be applied to the parcel.
3. If the shortest edge is smaller than the threshold, this type won’t be applied to the parcel.
4. If the ratio of the longest edge to the shortest edge is larger than 5, this type won’t be applied to the parcel.

![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Radial_Tower/toKnow.jpg)

### Required Plugins

No specific plugins necessary

### Required Files

[Rhino File](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Radial_Tower/Radial%20Tower%20for%20Solar%20Energy.3dm)

[Grasshopper File](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Radial_Tower/Radial%20Tower%20for%20Solar%20Energy.gh)
