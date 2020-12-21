# Tower with Balconies for Optimal Daylight

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-XIM%20-%20MAIN%20PHOTO.jpg)

### Type Description

This type is a redesign of the existing NYCHA Building type. Generally in each building there is a central vertical circulation core and radial residential wings, the number of which depends on how many sides the parcel has. This is a very typical building of NYCHA and it is efficient in terms of spatial organization and programs distribution. The purpose of these iterations are trying to optimize the solar energy production potential of putting PV Panels on building facade.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-BATTERY.png)

### Required inputs

1. Dynamic:

(1)Base Curves: The input data structure must be Grafted.

(2)FAR: The input data will determine the density of the building.

2. Static:

(1)Tower Footprint One Side Set Back Ratio: The data range should be between 0 and 0.5.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-XIM%20-%20SETBACK.jpg)

(2)Tower Footprint General Offset Ratio: The data should smaller than One Side Set Back Ratio.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-XIM%20-%20OFFSET.jpg)

(3)Interval Floor Number: This parameter determines how many floors generate a balcony for a group.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-XIM%20-%20Interval.jpg)

(4)Floor to Floor Height

(5)Podium Height

(6)Balcony Depth

### Type Rules

1. Based on typical NYCHA Housing types. It applies to convex polygon parcels and whose max to min sides ratio is under the threshold.
2. If the area of the parcel is smaller than a threshold, this type won’t be applied to the parcel.
3. If the shortest edge is smaller than a threshold, this type won’t be applied to the parcel.
4. The ratio of the longest edge to the shortest edge is another parameter: if it is larger than the threshold, the building will have same widths’ wings; if it is larger smaller than the threshold, the wings’s widths will be in proportion, which is relevant to the geometry of the parcel.
5. There are some spatial qualities of the type: in some cases, several buildings’ wings enclose the space to become courtyards or semi-courtyards spaces.


![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Radial_Tower/radialTower.jpg)

### Use Type If:

1. Your team has interests in the typologies of NYCHA Housing.
2. Your team has interests in studying the solar energy production potential of PV Panels on facade.
3. Your team wants to conduct studies of sunlight, view analysis and public spaces shared by each resident in the parcel.


### Not Recommended to Use Type If:

1. Your team is more interested in more complex geometries.
2. The street grid of your team has curves.
3. You want to create a totally new type instead of transferring from the existing NYCHA types.

### What to Know & Limitations

1. Tower Footprint in cluster. If your tower has less than 4 sides (like triangle shape), it would not work.
   The current type only supports the tower with greater than or equal to 4 sides, and optimize the one with more than 4 sides to 4 sides.
2. Balcony Footprint in cluster. If your tower want to conduct the sunlight based on the urban context, you will have to modify the definition of sunlight vector.

![description](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/P-XIM%20-%204%20sides.jpg)


### Required Plugins

No specific plugins necessary

### Required Files

[Rhino File](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/types/Tower_with_Balconies/Tower%20with%20Balconies%20for%20Optimal%20Daylight.3dm)

[Grasshopper File](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/types/Tower_with_Balconies/Tower%20with%20Balconies%20for%20Optimal%20Daylight.gh)
