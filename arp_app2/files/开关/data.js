﻿$axure.loadCurrentPage({
  "url":"开关.html",
  "generationDate":new Date(1454143465759.61),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"e42b925eb11147f0ab5c5466d41e6699",
    "type":"Axure:Page",
    "name":"开关",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"Applied Font",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"b88b6bfc91874f139f7220714030a657",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "location":{
              "x":4,
              "y":0},
            "size":{
              "width":430,
              "height":880}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"ca262200a013484c87ee377780e9ff7f",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "location":{
                  "x":4,
                  "y":0},
                "size":{
                  "width":430,
                  "height":880}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/lighting_cloud_v2/u0.png"}},
{
          "id":"5c2c5849df384e56bab30f395481ed01",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "location":{
              "x":33,
              "y":108},
            "size":{
              "width":372,
              "height":662}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"142dc1af719c4b07af79434b66ef3b8a",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "location":{
                  "x":33,
                  "y":108},
                "size":{
                  "width":372,
                  "height":662}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/开关/u2.jpg"}},
{
          "id":"20e58a2fd9e6452da0a02fd0a3c5bae8",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":344,
              "y":140},
            "size":{
              "width":50,
              "height":50}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 导航",
                      "target":{
                        "targetType":"page",
                        "url":"导航.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"2f07e5639d89431da5a289b621f90e47",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":50,
              "y":690},
            "size":{
              "width":330,
              "height":50}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 设置",
                      "target":{
                        "targetType":"page",
                        "url":"设置.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"705c953b745f485699f23ed795895c66",
          "label":"close",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "location":{
              "x":106,
              "y":366},
            "size":{
              "width":225,
              "height":225}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"3a67e3faeac5436b807301c751f13e49",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "location":{
                  "x":106,
                  "y":366},
                "size":{
                  "width":225,
                  "height":225}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/开关_亮度_1/close_u6.png"}},
{
          "id":"907d6c9ec0d44fb89568a78cd9d43a2d",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":108,
              "y":366},
            "size":{
              "width":220,
              "height":210}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"切换 close,<br>2,<br>1",
                      "objectsToFades":[{
                          "objectPath":["705c953b745f485699f23ed795895c66"],
                          "fadeInfo":{
                            "fadeType":"toggle",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["68f695ecc30a4d54bceccd1f7bb9f977"],
                          "fadeInfo":{
                            "fadeType":"toggle",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["eca320579d97476eb4bab13531ea4396"],
                          "fadeInfo":{
                            "fadeType":"toggle",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true},
{
          "id":"325c8899bb3c4c9198c2efb3c3eade01",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":50,
              "y":204},
            "size":{
              "width":50,
              "height":50}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 色温+亮度",
                      "target":{
                        "targetType":"page",
                        "url":"色温_亮度.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"c92924c292ea4c15971c9dc133deeb6b",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":110,
              "y":204},
            "size":{
              "width":60,
              "height":53}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 彩色+色温+亮度_彩色",
                      "target":{
                        "targetType":"page",
                        "url":"彩色_色温_亮度_彩色.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"3a6c31e933594e409f24edcbaf6a333e",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":180,
              "y":190},
            "size":{
              "width":80,
              "height":80}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 开关+亮度_1",
                      "target":{
                        "targetType":"page",
                        "url":"开关_亮度_1.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"a0cde068784146d09a56af8f90767ae5",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":270,
              "y":204},
            "size":{
              "width":53,
              "height":53}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 开关",
                      "target":{
                        "targetType":"page",
                        "url":"开关.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"b345afcdba1340b8ac5c945a4809c141",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":332,
              "y":205},
            "size":{
              "width":50,
              "height":50}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 色温+亮度",
                      "target":{
                        "targetType":"page",
                        "url":"色温_亮度.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"339828e2c6a74ad6a4ec984224e1d6c8",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "fill":{
              "fillType":"solid",
              "color":0xFF009DD9},
            "location":{
              "x":378,
              "y":140},
            "size":{
              "width":10,
              "height":10},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"e9f3771937c14d858ac1f5ca1b4e5e87",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "fill":{
                  "fillType":"solid",
                  "color":0xFF009DD9},
                "location":{
                  "x":378,
                  "y":140},
                "size":{
                  "width":10,
                  "height":10},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/色温_亮度/u11.png"}},
{
          "id":"46a6ae213fdf4b059b6bebf925dac68b",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "fill":{
              "fillType":"solid",
              "color":0xFF009DD9},
            "location":{
              "x":301,
              "y":380},
            "size":{
              "width":10,
              "height":10},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"b25397a231b3483d8e44b7566bcf72ca",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "fill":{
                  "fillType":"solid",
                  "color":0xFF009DD9},
                "location":{
                  "x":301,
                  "y":380},
                "size":{
                  "width":10,
                  "height":10},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/色温_亮度/u11.png"}},
{
          "id":"120e18383ca347d3addbe3e33445feca",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "fill":{
              "fillType":"solid",
              "color":0xFF009DD9},
            "location":{
              "x":337,
              "y":691},
            "size":{
              "width":10,
              "height":10},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"22576f10cd7949dd9d2f3fb7a05d3e75",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "fill":{
                  "fillType":"solid",
                  "color":0xFF009DD9},
                "location":{
                  "x":337,
                  "y":691},
                "size":{
                  "width":10,
                  "height":10},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/色温_亮度/u11.png"}},
{
          "id":"43c5e4aabcfd4589b025acd29a689a20",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "fill":{
              "fillType":"solid",
              "color":0xFF009DD9},
            "location":{
              "x":380,
              "y":210},
            "size":{
              "width":10,
              "height":10},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"8545492497e546388c7d892d47e98068",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "fill":{
                  "fillType":"solid",
                  "color":0xFF009DD9},
                "location":{
                  "x":380,
                  "y":210},
                "size":{
                  "width":10,
                  "height":10},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/色温_亮度/u11.png"}},
{
          "id":"1f89bb1aca7641aa8f42f63bd826f3a0",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "fill":{
              "fillType":"solid",
              "color":0xFF009DD9},
            "location":{
              "x":320,
              "y":210},
            "size":{
              "width":10,
              "height":10},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"5a7a3d01dabc43e38ced69b437b880e9",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "fill":{
                  "fillType":"solid",
                  "color":0xFF009DD9},
                "location":{
                  "x":320,
                  "y":210},
                "size":{
                  "width":10,
                  "height":10},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/色温_亮度/u11.png"}},
{
          "id":"62f2c5cff25c4a5191ebe512777b683c",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "fill":{
              "fillType":"solid",
              "color":0xFF009DD9},
            "location":{
              "x":258,
              "y":192},
            "size":{
              "width":10,
              "height":10},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"dee03e4e66704faba067ed70dbe20693",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "fill":{
                  "fillType":"solid",
                  "color":0xFF009DD9},
                "location":{
                  "x":258,
                  "y":192},
                "size":{
                  "width":10,
                  "height":10},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/色温_亮度/u11.png"}},
{
          "id":"a4909476ed404d70bf35b323e6198b24",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "fill":{
              "fillType":"solid",
              "color":0xFF009DD9},
            "location":{
              "x":167,
              "y":207},
            "size":{
              "width":10,
              "height":10},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"027d5227d1af45ce9cffaba273f1ced9",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "fill":{
                  "fillType":"solid",
                  "color":0xFF009DD9},
                "location":{
                  "x":167,
                  "y":207},
                "size":{
                  "width":10,
                  "height":10},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/色温_亮度/u11.png"}},
{
          "id":"f737bb0dfc6c4f54afe8f813cd5cabb2",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "fill":{
              "fillType":"solid",
              "color":0xFF009DD9},
            "location":{
              "x":99,
              "y":211},
            "size":{
              "width":10,
              "height":10},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"0a4d7cd1b43a43c8a3315560e5da8e13",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "fill":{
                  "fillType":"solid",
                  "color":0xFF009DD9},
                "location":{
                  "x":99,
                  "y":211},
                "size":{
                  "width":10,
                  "height":10},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/色温_亮度/u11.png"}},
{
          "id":"68f695ecc30a4d54bceccd1f7bb9f977",
          "label":"2",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":false,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "location":{
              "x":586,
              "y":182},
            "size":{
              "width":254,
              "height":328},
            "visible":false},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"054a67ae0192442cb21c8f7cedb42804",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "location":{
                  "x":586,
                  "y":182},
                "size":{
                  "width":254,
                  "height":328},
                "visible":false},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/色温_亮度/2_u30.png"}},
{
          "id":"eca320579d97476eb4bab13531ea4396",
          "label":"1",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "fontName":"'Applied Font Regular', 'Applied Font'",
            "location":{
              "x":586,
              "y":176},
            "size":{
              "width":254,
              "height":328}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"780fcb8ceee14a589212635488d2d6ba",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Applied Font Regular', 'Applied Font'",
                "location":{
                  "x":586,
                  "y":176},
                "size":{
                  "width":254,
                  "height":328}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/色温_亮度/1_u28.png"}}]}},
  "masters":{
},
  "objectPaths":{
    "b88b6bfc91874f139f7220714030a657":{
      "scriptId":"u0"},
    "ca262200a013484c87ee377780e9ff7f":{
      "scriptId":"u1"},
    "5c2c5849df384e56bab30f395481ed01":{
      "scriptId":"u2"},
    "142dc1af719c4b07af79434b66ef3b8a":{
      "scriptId":"u3"},
    "20e58a2fd9e6452da0a02fd0a3c5bae8":{
      "scriptId":"u4"},
    "2f07e5639d89431da5a289b621f90e47":{
      "scriptId":"u5"},
    "705c953b745f485699f23ed795895c66":{
      "scriptId":"u6"},
    "3a67e3faeac5436b807301c751f13e49":{
      "scriptId":"u7"},
    "907d6c9ec0d44fb89568a78cd9d43a2d":{
      "scriptId":"u8"},
    "325c8899bb3c4c9198c2efb3c3eade01":{
      "scriptId":"u9"},
    "c92924c292ea4c15971c9dc133deeb6b":{
      "scriptId":"u10"},
    "3a6c31e933594e409f24edcbaf6a333e":{
      "scriptId":"u11"},
    "a0cde068784146d09a56af8f90767ae5":{
      "scriptId":"u12"},
    "b345afcdba1340b8ac5c945a4809c141":{
      "scriptId":"u13"},
    "339828e2c6a74ad6a4ec984224e1d6c8":{
      "scriptId":"u14"},
    "e9f3771937c14d858ac1f5ca1b4e5e87":{
      "scriptId":"u15"},
    "46a6ae213fdf4b059b6bebf925dac68b":{
      "scriptId":"u16"},
    "b25397a231b3483d8e44b7566bcf72ca":{
      "scriptId":"u17"},
    "120e18383ca347d3addbe3e33445feca":{
      "scriptId":"u18"},
    "22576f10cd7949dd9d2f3fb7a05d3e75":{
      "scriptId":"u19"},
    "43c5e4aabcfd4589b025acd29a689a20":{
      "scriptId":"u20"},
    "8545492497e546388c7d892d47e98068":{
      "scriptId":"u21"},
    "1f89bb1aca7641aa8f42f63bd826f3a0":{
      "scriptId":"u22"},
    "5a7a3d01dabc43e38ced69b437b880e9":{
      "scriptId":"u23"},
    "62f2c5cff25c4a5191ebe512777b683c":{
      "scriptId":"u24"},
    "dee03e4e66704faba067ed70dbe20693":{
      "scriptId":"u25"},
    "a4909476ed404d70bf35b323e6198b24":{
      "scriptId":"u26"},
    "027d5227d1af45ce9cffaba273f1ced9":{
      "scriptId":"u27"},
    "f737bb0dfc6c4f54afe8f813cd5cabb2":{
      "scriptId":"u28"},
    "0a4d7cd1b43a43c8a3315560e5da8e13":{
      "scriptId":"u29"},
    "68f695ecc30a4d54bceccd1f7bb9f977":{
      "scriptId":"u30"},
    "054a67ae0192442cb21c8f7cedb42804":{
      "scriptId":"u31"},
    "eca320579d97476eb4bab13531ea4396":{
      "scriptId":"u32"},
    "780fcb8ceee14a589212635488d2d6ba":{
      "scriptId":"u33"}}});