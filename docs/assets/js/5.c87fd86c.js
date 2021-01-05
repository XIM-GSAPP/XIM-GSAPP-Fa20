(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{369:function(t,e,a){t.exports=a.p+"assets/img/Sufficent_Daylight_Hour_Tool_01.486023af.jpg"},370:function(t,e,a){t.exports=a.p+"assets/img/Sufficent_Daylight_Hour_Tool_02.52d9ca52.jpg"},371:function(t,e,a){t.exports=a.p+"assets/img/Sufficent_Daylight_Hour_Tool_03.beafd862.jpg"},372:function(t,e,a){t.exports=a.p+"assets/img/public_space_daylight4.1372107d.png"},373:function(t,e,a){t.exports=a.p+"assets/img/public_space_daylight3.f7f1905e.png"},374:function(t,e,a){t.exports=a.p+"assets/img/public_space_daylight2.f495be48.png"},375:function(t,e,a){t.exports=a.p+"assets/img/public_space_daylight1.92264f8d.png"},417:function(t,e,a){"use strict";a.r(e);var i=a(42),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"environmental-tools"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#environmental-tools"}},[t._v("#")]),t._v(" Environmental Tools")]),t._v(" "),i("p",[t._v("The list below includes all of the Environmental Tools developed by each team in the class. They all follow a similar temple to keep documentation standardized.")]),t._v(" "),i("h2",{attrs:{id:"sufficient-daylight-hour-tool"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sufficient-daylight-hour-tool"}},[t._v("#")]),t._v(" Sufficient Daylight Hour Tool")]),t._v(" "),i("h4",{attrs:{id:"tool-author-food-oasis"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tool-author-food-oasis"}},[t._v("#")]),t._v(" Tool Author: Food Oasis")]),t._v(" "),i("p",[i("img",{attrs:{src:a(369),alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),i("p",[t._v("This tool analyzes average daylight hours of exterior horizontal spaces that can be used as garden hours. Then it dispatches the surfaces with sufficient amount of daylight to a vegetable type.")]),t._v(" "),i("h3",{attrs:{id:"how-to-use"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How To Use")]),t._v(" "),i("p",[i("b",[t._v("Step by Step Instructions:")])]),t._v(" "),i("ol",[i("li",[t._v('Right click on "Geo: Lots" -> Select Multiple and select lot areas for towers.')]),t._v(" "),i("li",[t._v("Toggle between 'Tower Type' and 'FAR' to get desired shape and size.")]),t._v(" "),i("li",[t._v("Link to epw file")]),t._v(" "),i("li",[t._v('Right click on "Context" -> Select Multiple and select building obstructions.')]),t._v(" "),i("li",[t._v("Adjust 'Analysis Resolution', 'Start Time', 'End time', 'Day', and 'Month' accordingly to your analysis.")]),t._v(" "),i("li",[t._v("Adjust 'Min Hour Threshold'.")]),t._v(" "),i("li",[t._v("Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.")])]),t._v(" "),i("p",[i("b",[t._v(" Troubleshooting ")])]),t._v(" "),i("p",[t._v("Make sure to properly load the context as it is crucial for to test the daylight hours correctly")]),t._v(" "),i("p",[t._v("Make sure all the inputs have been loaded correctly.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(370),alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"modeling-standards"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#modeling-standards"}},[t._v("#")]),t._v(" Modeling Standards")]),t._v(" "),i("p",[i("b",[t._v("Please follow the following Rhino standards to ensure the proper functionality of the tool: ")])]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My test curve is a single CLOSED polyline.")])]),t._v(" "),i("li",[t._v('Try "SelClosedCrv" to make sure it is closed.')]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My model is oriented to True North.")])]),t._v(" "),i("li",[t._v("Re-orient if it was rotated off of North at the start of the project.")]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Any groups or blocks in building context have been ungrouped.")])]),t._v(" "),i("li",[t._v('Try "SelBlockInstance" and "SelGroup" to make sure.')]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My model is set to either Meters or Feet (not mm or in).")])]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My model is free of overlapping, coplanar, or intersecting geometry.")])]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Any obstructions around the space have been modeled (trees, topography, buildings).")])]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Any curved surfaces in the model have been simplified to individual flat planes.")])]),t._v(" "),i("h3",{attrs:{id:"sources-calculations-metrics"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sources-calculations-metrics"}},[t._v("#")]),t._v(" Sources, Calculations + Metrics")]),t._v(" "),i("p",[t._v("This tool extracts exterior horizontal spaces and turns them into garden areas. It calculates the amount of sunlight each of those surfaces receive, and then dispatches the surfaces that receive sufficient daylight to a specific vegetable type. The vegetable types are already predetermined but it can be changed.")]),t._v(" "),i("h3",{attrs:{id:"limitations-context"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#limitations-context"}},[t._v("#")]),t._v(" Limitations & Context")]),t._v(" "),i("p",[t._v("The limitation of the tool is that it does not take into consideration the climate necessary for vegetable growth. It only calculates if the areas receive sufficient daylight.")]),t._v(" "),i("h3",{attrs:{id:"examples"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),i("p",[t._v("Here is how we used this tool on a project!")]),t._v(" "),i("p",[i("img",{attrs:{src:a(371),alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"required-files"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-files"}},[t._v("#")]),t._v(" Required Files")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Average_Daylight/files/Sufficent%20Daylight%20Hour%20Tool.3dm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rhino File"),i("OutboundLink")],1)]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Average_Daylight/files/Sufficient%20Daylight%20Hour%20Tool.gh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grasshopper File"),i("OutboundLink")],1)]),t._v(" "),i("h2",{attrs:{id:"beneficial-daylight-for-facades-analysis-tool"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#beneficial-daylight-for-facades-analysis-tool"}},[t._v("#")]),t._v(" Beneficial Daylight for Facades Analysis Tool")]),t._v(" "),i("h4",{attrs:{id:"tool-author-energy-efficient-communities-team"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tool-author-energy-efficient-communities-team"}},[t._v("#")]),t._v(" Tool Author: Energy Efficient Communities Team")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/T-MAIN%20PHOTO2.jpg",alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"tool-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tool-description"}},[t._v("#")]),t._v(" Tool Description")]),t._v(" "),i("p",[t._v("This analysis tool explores building in winter and summer sunlight time. In consideration of energy consumption, the building should reduce direct sunlight in summer as much as possible to prevent heat, and increase direct sunlight in winter to ensure insulation. Area that meets both summer shading and winter lighting can be understood as a sustainable area. This Analysis Tool visualizes the distribution of these sustainable areas.")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/T-battery.png",alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"required-inputs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-inputs"}},[t._v("#")]),t._v(" Required inputs")]),t._v(" "),i("ol",[i("li",[t._v("Dynamic: Context Mesh: merge context and target buildings into meshes")])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/T-mesh%20context.jpg",alt:"description"}})]),t._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[t._v("Static:")])]),t._v(" "),i("p",[t._v("(1)Building Surface Subdivision Number: this input data should not larger than 50.")]),t._v(" "),i("p",[t._v("(2)Winter Sun Path")]),t._v(" "),i("p",[t._v("(3)Winter sunrise and sunset time domain")]),t._v(" "),i("p",[t._v("(4)Winter Sunlight Hours Threshold: 3")]),t._v(" "),i("p",[t._v("(5)Summer Sun Path")]),t._v(" "),i("p",[t._v("(6)Summer sunrise and sunset time domain")]),t._v(" "),i("p",[t._v("(7)Summer Sunlight Hours Threshold: 6")]),t._v(" "),i("h3",{attrs:{id:"tool-rules"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tool-rules"}},[t._v("#")]),t._v(" Tool Rules")]),t._v(" "),i("ol",[i("li",[t._v("With sun path and sunlight time Domain, the battery output two groups of data about energy consumption based on the current building: Winter Sunlight Hours and Summer Shadow Hours. For winter, the sunlight time on the winter solstice is about 3hours. We think that “winter sun > 3hours/day” is relatively ideal. For summer, we arrange the sunlight time in order, ensuring enough shadow in summer. we think that “summer sun < 6hours/day”is beneficial.")]),t._v(" "),i("li",[t._v('"Sustainable Facade " in output data indicates the percentage of the facade area that meets both “winter sun > 3hours/day” and “summer sun < 6hours/day”.')]),t._v(" "),i("li",[t._v("Area that meets both summer shading and winter lighting can be understood as a sustainable area. “Mesh Analysis” visualizes the distribution of these sustainable areas.")])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/images/T-SUBDIVISION.jpg",alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"modeling-standards-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#modeling-standards-2"}},[t._v("#")]),t._v(" Modeling Standards")]),t._v(" "),i("ol",[i("li",[t._v("Please follow the following Rhino standards to ensure the proper functionality of the tool:")]),t._v(" "),i("li",[t._v("Model is oriented to True North.")]),t._v(" "),i("li",[t._v("Model is set to either Meters or Feet (not mm or in).")]),t._v(" "),i("li",[t._v("Model is free of overlapping, coplanar, or intersecting geometry.")]),t._v(" "),i("li",[t._v("Any obstructions around the space have been modeled (trees, topography, buildings).")]),t._v(" "),i("li",[t._v("Any curved surfaces in the model have been simplified to individual flat planes.")]),t._v(" "),i("li",[t._v("Any surrounding context has been made into a single, joined mesh.")])]),t._v(" "),i("h3",{attrs:{id:"limitations-context-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#limitations-context-2"}},[t._v("#")]),t._v(" Limitations & Context")]),t._v(" "),i("p",[t._v("1.The current sunshine information is in New York. If you want to apply to other cities, please link the correct Sun Path Curve and sunrise/ Sunset Domain.\n2.The analysis tool doesn't measure the building energy.")]),t._v(" "),i("h3",{attrs:{id:"required-plugins"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-plugins"}},[t._v("#")]),t._v(" Required Plugins")]),t._v(" "),i("p",[t._v("No specific plugins necessary")]),t._v(" "),i("h3",{attrs:{id:"required-files-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-files-2"}},[t._v("#")]),t._v(" Required Files")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Average_Daylight/Beneficial%20Daylight%20for%20Facades%20Analysis%20Tool.3dm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rhino File"),i("OutboundLink")],1)]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Average_Daylight/Beneficial%20Daylight%20for%20Facades%20Analysis%20Tool.gh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grasshopper File"),i("OutboundLink")],1)]),t._v(" "),i("h2",{attrs:{id:"the-public-space-average-daylight"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#the-public-space-average-daylight"}},[t._v("#")]),t._v(" The Public Space Average Daylight")]),t._v(" "),i("h4",{attrs:{id:"tool-author-the-great-outdoors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tool-author-the-great-outdoors"}},[t._v("#")]),t._v(" Tool Author: The Great Outdoors")]),t._v(" "),i("h3",{attrs:{id:"type-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#type-description"}},[t._v("#")]),t._v(" Type Description")]),t._v(" "),i("p",[i("img",{attrs:{src:a(372),alt:"description"}})]),t._v(" "),i("p",[i("img",{attrs:{src:a(373),alt:"description"}})]),t._v(" "),i("p",[i("img",{attrs:{src:a(374),alt:"description"}})]),t._v(" "),i("p",[i("img",{attrs:{src:a(375),alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"required-inputs-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-inputs-2"}},[t._v("#")]),t._v(" Required inputs")]),t._v(" "),i("p",[t._v("Description to be added")]),t._v(" "),i("h3",{attrs:{id:"type-rules"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#type-rules"}},[t._v("#")]),t._v(" Type Rules")]),t._v(" "),i("p",[t._v("Description to be added")]),t._v(" "),i("h3",{attrs:{id:"use-type-if"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#use-type-if"}},[t._v("#")]),t._v(" Use Type If:")]),t._v(" "),i("p",[t._v("Description to be added")]),t._v(" "),i("h3",{attrs:{id:"not-recommended-to-use-type-if"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#not-recommended-to-use-type-if"}},[t._v("#")]),t._v(" Not Recommended to Use Type If:")]),t._v(" "),i("p",[t._v("Description to be added")]),t._v(" "),i("h3",{attrs:{id:"what-to-know-limitations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-to-know-limitations"}},[t._v("#")]),t._v(" What to Know & Limitations")]),t._v(" "),i("p",[t._v("Description to be added")]),t._v(" "),i("h3",{attrs:{id:"required-plugins-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-plugins-2"}},[t._v("#")]),t._v(" Required Plugins")]),t._v(" "),i("p",[t._v("N/A")]),t._v(" "),i("h4",{attrs:{id:"how-to-use-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-2"}},[t._v("#")]),t._v(" How To Use")]),t._v(" "),i("p",[t._v("Description to be added")]),t._v(" "),i("h3",{attrs:{id:"required-files-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-files-3"}},[t._v("#")]),t._v(" Required Files")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/tterrytang/the-great-outdoor/blob/main/The%20Great%20Outdoors%20(1).3dm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rhino File"),i("OutboundLink")],1)]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/tterrytang/the-great-outdoor/blob/main/great%20out%20door%20building%20types.gh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grasshopper File"),i("OutboundLink")],1)]),t._v(" "),i("h2",{attrs:{id:"interior-light-tool"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#interior-light-tool"}},[t._v("#")]),t._v(" Interior Light Tool")]),t._v(" "),i("h4",{attrs:{id:"tool-author-food-oasis-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tool-author-food-oasis-2"}},[t._v("#")]),t._v(" Tool Author: Food Oasis")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight01.png",alt:"interior light 00"}})]),t._v(" "),i("h3",{attrs:{id:"description-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[t._v("#")]),t._v(" Description")]),t._v(" "),i("p",[t._v("This tool measures the amount of light coming in on the facades of buildings into the living spaces. Use this to evaluate the amount of light and degree of comfort a person in the building might have.")]),t._v(" "),i("h3",{attrs:{id:"how-to-use-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-3"}},[t._v("#")]),t._v(" How To Use")]),t._v(" "),i("ol",[i("li",[t._v("Create a solid union and the deconstruct the design.")]),t._v(" "),i("li",[t._v("Evaluate the surfaces and deconstruct the vectors into their component parts.")]),t._v(" "),i("li",[t._v("Cull the Z vectors to remove the tops and bottoms from the analysis.")]),t._v(" "),i("li",[t._v("Subdivide the remaining surfaces.")]),t._v(" "),i("li",[t._v("Move the divided surfaces that you want to analyze away from the buildings.")]),t._v(" "),i("li",[t._v("Evaluate the points and normal vectors of the subdivided surfaces and move those away from the building as well.")]),t._v(" "),i("li",[t._v("Merge the building and context breps and transform them into a mesh.")]),t._v(" "),i("li",[t._v("Join the mesh and right click to label as a mesh obstruction.")]),t._v(" "),i("li",[t._v("Create a line segment from the analysis points and normal vectors.")]),t._v(" "),i("li",[t._v("Bring the line components and mesh obstructions into an IsoVist Ray.")]),t._v(" "),i("li",[t._v("Divide the distance by the desired radius of context from the points that will impact the amount of light each surface panel can receive. This will be the number score per panel that will show how much light the facades are getting.")]),t._v(" "),i("li",[t._v("Take the same result and do a mass addition of the numbers to test, as well as create a list length. Divide the mass addition by the list length to find the percent threshold to measure with.")]),t._v(" "),i("li",[t._v("Average the scores per panel.")]),t._v(" "),i("li",[t._v("Use the scores per panel as the parameter on the color gradient to apply to the surface panel geometries.")]),t._v(" "),i("li",[t._v("Review the visual and metric outputs.")])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight02.png",alt:"Interior Light gh image"}})]),t._v(" "),i("h4",{attrs:{id:"troubleshooting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),i("p",[t._v("Make sure to properly evaluate the normal vectors and amplitude so the color gradients show up on the exterior and not the interior of the buildings.")]),t._v(" "),i("p",[t._v("Change the multiplication factor number that you move the subsurfaces by to make sure they are offset far enough from the building so the colors can be seen.")]),t._v(" "),i("h4",{attrs:{id:"required-files-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-files-4"}},[t._v("#")]),t._v(" Required Files")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.3dm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rhino File"),i("OutboundLink")],1)]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.gh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grasshopper File"),i("OutboundLink")],1)]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight03.png",alt:"Select Context and Design"}})]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight04.png",alt:"Subdivide the Facade"}})]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20interiorlight05.png",alt:"IsoVist Ray"}})]),t._v(" "),i("br"),t._v(" "),i("h3",{attrs:{id:"modeling-standards-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#modeling-standards-3"}},[t._v("#")]),t._v(" Modeling Standards")]),t._v(" "),i("p",[i("b",[t._v("Please follow the following Rhino standards to ensure the proper functionality of the tool: ")])]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My test massing is a single, simplified, CLOSED polysurface.")])]),t._v(" "),i("li",[t._v('Try "SelClosedSrf" to make sure it is closed.')]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My model is oriented to True North.")])]),t._v(" "),i("li",[t._v("Re-orient if it was rotated off of North at the start of the project.")]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Any groups or blocks in the model have been ungrouped/exploded.")])]),t._v(" "),i("li",[t._v('Try "SelBlockInstance" and "SelGroup" to make sure.')]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My model is set to either Meters or Feet (not mm or in).")]),i("br")]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My model is free of overlapping, coplanar, or intersecting geometry.")]),i("br")]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Any obstructions around the space have been modeled (trees, topography, buildings).")]),i("br")]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Any curved surfaces in the model have been simplified to individual flat planes.")]),i("br")]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Any surrounding context has been made into a single, joined mesh.")])]),t._v(" "),i("h3",{attrs:{id:"sources-calculations-metrics-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sources-calculations-metrics-2"}},[t._v("#")]),t._v(" Sources, Calculations + Metrics")]),t._v(" "),i("p",[t._v("This tool uses this method of calculating light obstructed from other buildings. The metric is derived this manner.")]),t._v(" "),i("h3",{attrs:{id:"limitations-context-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#limitations-context-3"}},[t._v("#")]),t._v(" Limitations & Context")]),t._v(" "),i("p",[t._v("This tool measures light but it is not specific to the time of day or season. This tool shows surfaces that are not blocked by other buildings as receiving more light, as they would at any time of the year.")]),t._v(" "),i("h3",{attrs:{id:"examples-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),i("p",[t._v("Here is how we used this tool on a project!")]),t._v(" "),i("p",[t._v("To determine if the rooms of a building will be getting too much or too little light on average.\nTo determine if building placement is too obstructive for potential residents and needs to be changed.")]),t._v(" "),i("h2",{attrs:{id:"solar-proxy"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#solar-proxy"}},[t._v("#")]),t._v(" Solar Proxy")]),t._v(" "),i("h4",{attrs:{id:"tool-author-newtral-urbanism"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tool-author-newtral-urbanism"}},[t._v("#")]),t._v(" Tool Author: NEWtral Urbanism")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Solar%20Proxy/file/tool-1.jpg",alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"description-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[t._v("#")]),t._v(" Description")]),t._v(" "),i("p",[t._v("This tool is related to the solar energy generation on building facades and roofs aiming to simulate the real PV Panel solar production by a less time-consuming proxy.")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Solar%20Proxy/file/tool-4.JPG",alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"how-to-use-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-4"}},[t._v("#")]),t._v(" How To Use")]),t._v(" "),i("p",[i("b",[t._v("Step by Step Instructions:")])]),t._v(" "),i("ol",[i("li",[t._v("Link to EPW file")]),t._v(" "),i("li",[t._v("Build a new folder in your computer and copy the path into the new folder path panel.")]),t._v(" "),i("li",[t._v("Click the Button if this is your first time run this file, or you change the EPW file.")]),t._v(" "),i("li",[t._v('Right click on "Context" -> Select Multiple and select context massing.')]),t._v(" "),i("li",[t._v('Right click on "Massing to analyze" -> Select Multiple and select designed massing.')]),t._v(" "),i("li",[t._v("Adjust surface analysis resolution. (Larger, faster)")]),t._v(" "),i("li",[t._v("Choose which part you want to analyze -> 'facade', 'roof' or 'facade and roof'.")])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Solar%20Proxy/file/tool-2.jpg",alt:"description"}})]),t._v(" "),i("p",[i("b",[t._v(" Troubleshooting ")])]),t._v(" "),i("p",[t._v("Make sure to link to the right EPW file first and click the button.")]),t._v(" "),i("p",[t._v("Please add relevant plugins to your library for easy usage.")]),t._v(" "),i("h3",{attrs:{id:"modeling-standards-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#modeling-standards-4"}},[t._v("#")]),t._v(" Modeling Standards")]),t._v(" "),i("p",[i("b",[t._v("Please follow the following Rhino standards to ensure the proper functionality of the tool:")])]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My test massing is a single, simplified, CLOSED polysurface.")])]),t._v(" "),i("li",[t._v('Try "SelClosedSrf" to make sure it is closed.')]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My model is oriented to True North.")])]),t._v(" "),i("li",[t._v("Re-orient if it was rotated off of North at the start of the project.")]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Any groups or blocks in the model have been ungrouped/exploded.")])]),t._v(" "),i("li",[t._v('Try "SelBlockInstance" and "SelGroup" to make sure.')]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My model is set to Feet (not mm or in).")]),t._v(" "),i("br")]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My model is free of overlapping, coplanar, or intersecting geometry.")]),i("br")]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Any obstructions around the space have been modeled (trees, topography, buildings).")]),i("br")]),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Any curved surfaces in the model have been simplified to individual flat planes.")]),i("br")]),t._v(" "),i("h3",{attrs:{id:"sources-calculations-metrics-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sources-calculations-metrics-3"}},[t._v("#")]),t._v(" Sources, Calculations + Metrics")]),t._v(" "),i("p",[t._v("This tool uses this method of calculating approximately PV energy generation.")]),t._v(" "),i("ol",[i("li",[t._v("We calculate the solar energy production of a basic surface to get the acceptable PV efficiency (85%) per sq ft.")]),t._v(" "),i("li",[t._v("Then we get hours for the 10th and 20th for every month from 6am to 8pm.")]),t._v(" "),i("li",[t._v("Next we use Archsim to get a proxy of annual solar radiation.")]),t._v(" "),i("li",[t._v("We take a 90% of the upper bounds of the result.")]),t._v(" "),i("li",[t._v("We multiply the surfaces' area above the threshold with the acceptable PV efficiency (85%) per sq ft, thus get the approximate PV Panel energy generation value.")])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Solar%20Proxy/file/regression.png",alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"limitations-context-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#limitations-context-4"}},[t._v("#")]),t._v(" Limitations & Context")]),t._v(" "),i("p",[t._v("The tool is still under development. We are still trying to figure out the correlations between Solar Radiation and PV Panel production. Since PV Simulation is an extremely time-consuming tool, then we used this proxy tool to approximate the real solar production.")]),t._v(" "),i("h3",{attrs:{id:"examples-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),i("p",[t._v("Here is how we used this tool on a project!")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/Solar%20Proxy/file/tool-5.JPG",alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"required-plugins-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-plugins-3"}},[t._v("#")]),t._v(" Required Plugins")]),t._v(" "),i("ol",[i("li",[t._v("Pufferfish")]),t._v(" "),i("li",[t._v("Archsim")])]),t._v(" "),i("h3",{attrs:{id:"required-files-5"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-files-5"}},[t._v("#")]),t._v(" Required Files")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/blob/main/src/tools/Environmental/Solar%20Proxy/file/solarProxy.3dm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rhino File"),i("OutboundLink")],1)]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/blob/main/src/tools/Environmental/Solar%20Proxy/file/solarProxy.gh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grasshopper File"),i("OutboundLink")],1)]),t._v(" "),i("h2",{attrs:{id:"wind-analysis-tool"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#wind-analysis-tool"}},[t._v("#")]),t._v(" Wind Analysis Tool")]),t._v(" "),i("h4",{attrs:{id:"tool-author-breathing-blocks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tool-author-breathing-blocks"}},[t._v("#")]),t._v(" Tool Author: Breathing Blocks")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_WindAnalysis1.png",alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"description-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[t._v("#")]),t._v(" Description")]),t._v(" "),i("p",[i("strong",[t._v("Custom wind analysis tool that measures optimal conditions for wind airflow and generates a street hierarchy of air flow uses.")]),t._v(" It identifies "),i("em",[i("strong",[t._v("primary streets")])]),t._v(" on each iterative scenario in relation to the primary wind direction, sorting those that are within 30 degrees or less of separation from the desired wind direction axis. The tool then analyzes every "),i("em",[i("strong",[t._v("secondary street")])]),t._v(" directly related to the relevant primary streets and measures their angle of intersection. "),i("strong",[t._v("Required plugins include Pufferfish and Human.")])]),t._v(" "),i("h3",{attrs:{id:"how-to-use-5"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-5"}},[t._v("#")]),t._v(" How To Use")]),t._v(" "),i("p",[i("b",[t._v("Step by Step Instructions:")])]),t._v(" "),i("ol",[i("li",[t._v("Define primary and secondary wind channels.")]),t._v(" "),i("li",[t._v("Set the appropriate curves for primary and secondary channels relative to the logic outlined in the main “Breathing Blocks” page.")]),t._v(" "),i("li",[t._v("Define the main wind direction axis based on your analysis of the dominant wind source in your site.")]),t._v(" "),i("li",[t._v("Set a curve, oriented in the same angle, as the primary wind direction in every appropriate group.")]),t._v(" "),i("li",[t._v("If needed, modify the angle of variation between the main wind direction axis and primary and secondary channels.")]),t._v(" "),i("li",[t._v("Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.")])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Environmental/WindAnalysis/Wind_Analysis_Script.png",alt:"description"}})]),t._v(" "),i("p",[i("b",[t._v(" Troubleshooting ")])]),t._v(" "),i("ol",[i("li",[t._v("Make sure to load the street curves appropriately: confirm that the curves are planar. This is crucial to the appropriate extraction of information and calculation of intersection by the script. The tool will not produce any results if primary and secondary streets do not intersect.")]),t._v(" "),i("li",[t._v("Confirm that the definition of curves is consistent with the desired hierarchy of streets.")]),t._v(" "),i("li",[t._v("Confirm that curves relating to each street type are set appropriately across the script.")]),t._v(" "),i("li",[t._v("If needed, modify the offset distance for the primary and secondary channel breps.")])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST_Wilson_AnirudhChandar_CamilaNunez_LuisMiguelPizano_FA20_WindAnalysis2.png",alt:"description"}})]),t._v(" "),i("h3",{attrs:{id:"modeling-standards-5"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#modeling-standards-5"}},[t._v("#")]),t._v(" Modeling Standards")]),t._v(" "),i("h5",[t._v("Please follow the following Rhino standards to ensure the proper functionality of the tool:")]),t._v(" "),i("br"),t._v(" "),i("p",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Please installe these plugi-ns for your wind analysis: Pufferfish, Human.")]),t._v(" "),i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("My model is oriented to True North.")])]),i("li",[t._v("Re-orient if it was rotated off of North at the start of the project.")]),t._v(" "),i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Your model must contain planar curves.")]),t._v(" "),i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("b",[t._v("Any surrounding context has to be a single, joined mesh.")]),t._v(" "),i("br"),i("p"),t._v(" "),i("h3",{attrs:{id:"sources-calculations-metrics-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sources-calculations-metrics-4"}},[t._v("#")]),t._v(" Sources, Calculations + Metrics")]),t._v(" "),i("ol",[i("li",[t._v("Primary and secondary street intersectionality relative to wind speed reduction.")]),t._v(" "),i("li",[t._v("Feasibility for any given street as primary channel for pollution airflow.")]),t._v(" "),i("li",[t._v("Optimal location of development lot relative to primary or secondary streets.")])]),t._v(" "),i("h3",{attrs:{id:"examples-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),i("p",[t._v("We used this tool to study pollution in the Bronx; pollution can be carried at a higher speed through primary streets, which will shelter comunal pedestrian spaces within the blocks by decreasing wind flow on secondary streets. The resulting percentage of airflow reduction for each street type facilitates comparison of each iterative scenario.")])])}),[],!1,null,null,null);e.default=r.exports}}]);