<template>
  <div class="Server">
    <div class="Info">
        Servers
        <span>{{getTotalPlayers()}}</span>
    </div>
    <div class="AllServers">
      <div class="Srv" v-for="(srv, index) in srvInfo" :key="srv+index" @click="connectToServer(srv)">
          {{srv.hostname}}
          <br>
          Players: {{srv.players}}/{{srv.maxplayers}}
          <br>
          Status: {{checkIfOnline(srv.is_online)}}
          <br>
          Location: {{srv.location}}
          <br>
          Uptime: {{srv.uptime}}%
          </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Server",
  data() {
    return {
        srvInfo: []
    };
  },
  methods: {
    getServers(server) {
      axios.get(server)
        .then((response) => { this.srvInfo.push(response.data) })
        .catch((error) => { console.log(error) });
    },
    checkIfOnline (status) {
        let result = parseInt(status) === 1 ? 'ONLINE' : 'OFFLINE'
        return result
    },
    getTotalPlayers () {
        let totalPlayers = 0;
        let maxPlayers = 0;
        this.srvInfo.map(srv => {
            totalPlayers += parseInt(srv.players)
        })
        this.srvInfo.map(srv => {
            maxPlayers += parseInt(srv.maxplayers)
        })
        return `Players: ${totalPlayers}/${maxPlayers}`
    },
    connectToServer (srv) {
        window.open(`steam://connect/${srv.address}:${srv.port}`)
    }
  },
  created () {
      this.getServers("https://ark-servers.net/api/?object=servers&element=detail&key=eNJ9fa3WlTWDQWj8y7Rj8yxq64jkYpqOTs2")
  }
};
</script>
