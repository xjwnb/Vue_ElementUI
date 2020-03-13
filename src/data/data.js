const menuList = {
  "data": [
    {
      "id": 9,
      "authName": "Basic",
      "path": null,
      "children": [
        {
          "id": 1,
          "authName": "Layout布局",
          "path": "/basic/layout",
          "children": []
        },
        {
          "id": 22,
          "authName": "Button按钮",
          "path": "/basic/button",
          "children": []
        },
        {
          "id": 23,
          "authName": "Progress进度条",
          "path": "/basic/progress",
          "children": []
        },
        {
          "id": 24,
          "authName": "Color颜色",
          "path": "/basic/color",
          "children": []
        },
        {
          "id": 25,
          "authName": "ColorPicker颜色选择器",
          "path": "/basic/colorpicker",
          "children": []
        },
        {
          "id": 26,
          "authName": "Icon图标",
          "path": "/basic/icon",
          "children": []
        }
      ]
   },
   {
     "id": 27,
     "authName": "Map地图",
     "path": "/map",
     "children": [
       {
        "id": 28,
        "authName": "BasicMap",
        "path": "/map/basic",
        "children": []
       }
     ]
   }
    
    
    /* ,
      {
        "id": 10,
        "authName": "权限管理",
        "path": null,
        "children": [
          {
            "id": 100,
            "authName": "角色列表",
            "path": null,
            "children": []
          },
          {
            "id": 3,
            "authName": "权限列表",
            "path": null,
            "children": []
          }
        ]
      },
      {
      "id": 11,
      "authName": "商品管理",
      "path": null,
      "children": [
        {
          "id": 4,
          "authName": "商品列表",
          "path": null,
          "children": []
        },
        {
          "id": 5,
          "authName": "父类参数",
          "path": null,
          "children": []
        },{
          "id": 6,
          "authName": "商品分类",
          "path": null,
          "children": []
        }
      ]
    },
    {
      "id": 12,
      "authName": "订单管理",
      "path": null,
      "children": [
        {
          "id": 7,
          "authName": "订单列表",
          "path": null,
          "children": []
        }
      ]
    },
    {
      "id": 13,
      "authName": "数据统计",
      "path": null,
      "children": [
        {
          "id": 8,
          "authName": "数据报表",
          "path": null,
          "children": []
        }
      ]
    } */
  ],
  "meta": {
    "msg": "获取菜单列表成功",
    "status": 200
  }
}

const buttonType = {
  "buttonType": [
    {
      "id": 1,
      "btntype": "primary",
      "name": "主要按钮",
      "icon": "el-icon-edit"
    },
    {
      "id": 2,
      "btntype": "success",
      "name": "主要按钮",
      "icon": "el-icon-check"
    },
    {
      "id": 3,
      "btntype": "info",
      "name": "信息按钮",
      "icon": "el-icon-message"
    },
    {
      "id": 4,
      "btntype": "warning",
      "name": "警报按钮",
      "icon": "el-icon-star-off"
    },
    {
      "id": 5,
      "btntype": "danger",
      "name": "危险按钮",
      "icon": "el-icon-delete"
    }
  ]
}

export {
  menuList,
  buttonType
}