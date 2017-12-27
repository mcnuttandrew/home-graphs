import React from 'react';
import HomeGraph from './home-graph';
import HOMES from '../homes';

function reformatLinksToGraph(links) {
  const nodeDict = links.reduce((acc, {source, target}) => {
    if (!acc[target]) {
      acc[target] = true;
    }
    if (!acc[source]) {
      acc[source] = true;
    }
    return acc;
  }, {});
  return {
    nodes: Object.keys(nodeDict).map(nodeName => ({id: nodeName})),
    links
  };
}

class RootComponent extends React.Component {
  render() {
    return (
      <div className="container" >
        <div className="header">
          <div className="title">HOME GRAPHS</div>
        </div>
        <div className="home-graph-wrapper" >
          {HOMES.map(({name, connections, size}, i) => {
            const data = reformatLinksToGraph(connections);
            return (
              <div key={i} className="home-graph">
                <div className="subtitle">{name}</div>
                <HomeGraph
                  title={name}
                  data={data}
                  height={2 * 714}
                  width={2000} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
RootComponent.displayName = 'RootComponent';
export default RootComponent;
