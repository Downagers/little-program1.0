Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "语言类",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '英语四级',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555081146537&di=f774cbdf887201820dfd44177cee3e4d&imgtype=0&src=http%3A%2F%2Fimg.99danji.com%2Fuploadfile%2F2015%2F1120%2F20151120052137311.png"
            },
            {
              child_id: 2,
              name: '英语六级',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555081061157&di=cd6c1c191f0ae92de59e310aace0afed&imgtype=0&src=http%3A%2F%2Fstorepic.oppomobile.com%2FuploadFiles%2FPImages%2F201503%2F07%2Fbced9e0368444e1492d738d1741a9d08.png.icon.h256.jpg"
            },
            {
              child_id: 3,
              name: '日语N1',
              image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2441878468,1867751819&fm=26&gp=0.jpg"
            },
            {
              child_id: 4,
              name: '日语N2',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555675939&di=b794953d37aa97516d0e0cc89c201e52&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fsoft%2Fimages%2F2014%2F0530%2F20140530041819992.jpg"
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "计算机类",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '国家二级计算机考试',
              image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091562741,1360449602&fm=26&gp=0.jpg"
            },
            {
              child_id: 2,
              name: 'ACM',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555081392674&di=81530197383850a94c7219c2a0be7d01&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F35a85edf8db1cb13d20708aade54564e92584b18.jpg"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "体育类",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '篮球',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555081617182&di=fd90e870698c263edf91c34e765d5192&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F67ccc5a0jw1elc72521g3j20rs0rswlj.jpg"
            },
            {
              child_id: 2,
              name: '足球',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555081493187&di=1cf82e7ebd90c236ec3152002fea499d&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F19%2F38%2F04K58PICyDw_1024.jpg"
            },
            {
              child_id: 3,
              name: '排球',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555081645017&di=b1f4a0123873b2d6ff0da18af9480667&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2F20120629%2FRedocn_2012062909302497.jpg"
            },
            {
              child_id: 4,
              name: '羽毛球',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555081674939&di=e3cbe238bfff3aa6aa43bf77581f9a1f&imgtype=0&src=http%3A%2F%2Fpic.makepolo.net%2Fnews%2Fallimg%2F20161216%2F1481881763456724.jpg"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "文学类",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 5,
        cate_name: "理科类",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '数学建模',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555676489&di=7775b9c016591582df66ca762ea4b307&imgtype=jpg&er=1&src=http%3A%2F%2Fgeo.qfnu.edu.cn%2F__local%2F1%2F5C%2F89%2F62492F5313F586E01E42032444C_D1349186_7DE1.jpg%3Fe%3D.jpg"
            },
            {
              child_id: 2,
              name: '物理竞赛',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555676550&di=d350626b2ae434dc8ffe7def2f425b03&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F16108%2F20180129085603-2001458502_jpg_300_300_9314.jpg%2F0"
            }
          ]
      },
      {
        cate_id: 6,
        cate_name: "其他",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '电子竞技',
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555676510&di=1350bbe6f2952534bd3e43ac18d2a0d1&imgtype=jpg&er=1&src=http%3A%2F%2Fimage3.uuu9.com%2Fwar3%2Fdota%2FUploadFiles_5254%2F201104%2F201104090821289741.jpg"
          }
        ]
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})  