using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace signalRdemo{
    public class chatHub: Hub {
        public async Task sendMessage(string user, string message){
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}