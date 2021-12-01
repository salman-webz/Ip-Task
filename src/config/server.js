const server = {
  init: function() {
    const server = this;
    this.IPADDRESS = new Proxy(server.IPADDRESS, {
      get: function(obj, prop) {
        return server._buildPath(obj[prop]);
      }
    });
    return server;
  },

  IPADDRESS: {
    FindCountry: "findCountry"
  },

  endpoints: {
    findCountry: { path: `${process.env.REACT_APP_BASE_URL}/ip?161.185.160.93` }
  },

  _buildUrl(current) {
    return `${process.env.REACT_APP_BASE_URL}${this.endpoints[current].path}`;
  },

  _buildPath(current) {
    return this.endpoints[current].path
  }
};

export default server.init.call(server);
