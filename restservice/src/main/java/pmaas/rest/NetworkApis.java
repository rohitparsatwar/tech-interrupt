package pmaas.rest;

import java.util.List;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import pmaas.dataservice.model.network.Network;
import pmaas.dataservice.model.network.NetworkFeed;
import pmaas.dataservice.service.NetworkImpl;

@Path("/networks")
public class NetworkApis {
	NetworkImpl networkImpl = new NetworkImpl();

	@Path("getPartnerNetworks/{partnerName}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Network> getPartnerNetworks(@PathParam("partnerName") String partnerName) {
		return networkImpl.getPartnerNetworks(partnerName);
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void createPartnerNetwork(Network network) {
		networkImpl.createPartnerNetwork(network);
	}

	@Path("{networkName}/addPartnerToNetwork/{partnerName}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public void addPartnerToNetwork(@PathParam("networkName") String networkName,
			@PathParam("partnerName") String partnerName) {
		networkImpl.addPartnerToNetwork(networkName, partnerName);
	}

	@Path("{networkName}/addPartnerToNetwork/{partnerName}/acceptinvite")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public void acceptInvite(@PathParam("networkName") String networkName,
			@PathParam("partnerName") String partnerName) {
		networkImpl.changeInvitationStatus(networkName, partnerName);
	}

	@Path("{networkName}/details")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Network getNetworkDetails(@PathParam("networkName") String networkName) {
		return networkImpl.getNetworkDetails(networkName);
	}

	@Path("{networkName}/partners")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Map<String, String> getNetworkPartners(@PathParam("networkName") String networkName) {
		return networkImpl.getNetworkPartners(networkName);
	}

	@Path("{networkName}/feeds")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<NetworkFeed> getNetworkFeeds(@PathParam("networkName") String networkName,
			@QueryParam("startIndex") int startIndex) {
		return networkImpl.getNetworkFeeds(networkName, startIndex);
	}

	@Path("{networkName}/feeds/{feed}/partner/{partnerName}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public void addFeed(@PathParam("networkName") String networkName, @PathParam("partnerName") String partnerName,
			@PathParam("feed") String feed) {
		networkImpl.addFeed(networkName, partnerName, feed);
	}

	@Path("{networkName}/feeds/{feedId}/comments/{comment}/partner/{partnerName}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public void addFeedComment(@PathParam("networkName") String networkName,
			@PathParam("partnerName") String partnerName, @PathParam("feedId") String feedId,
			@PathParam("comment") String comment) {
		networkImpl.addFeedComment(networkName, partnerName, feedId, comment);
	}
}
