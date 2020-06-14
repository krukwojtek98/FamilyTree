export default {
    layout: {
        hierarchical: {
          enabled:true,
          levelSeparation: 100,
          nodeSpacing: 200,
          treeSpacing: 150,
          blockShifting: true,
          edgeMinimization: true,
          parentCentralization: true,
          direction: 'UD',
          sortMethod: 'hubsize'
        }
    },
    nodes:{
      borderWidth: 2,
      borderWidthSelected: 2, 
      chosen: true,
      color: {
        border: '#278514',
        background: '#278514',
        highlight: {
          border: '#278514',
          background: '#278514'
        },
        hover: {
          border: '#278514',
          background: '#278514'
        }
      },
      font: {
        color: '#000000',
        size: 18,
        align: 'center'        
      }     
    },
    edges:{
      color: {
        color:'#9b6f0f',
        highlight:'#9b6f0f',
        hover: '#9b6f0f',
      },
      font: {
        color: '#000000',
        size: 14
      },
      width: 5
    }
}