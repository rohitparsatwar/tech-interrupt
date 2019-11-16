package pmaas.dataservice.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import pmaas.dataservice.model.network.Network;
import pmaas.dataservice.model.network.Network.NetworkInfo;
import pmaas.dataservice.model.network.NetworkFeed;

public class NetworkImpl {

	static Map<String, Set<Network>> partnerNetworkCache = new HashMap<String, Set<Network>>();
	static Map<String, Network> networkCache = new HashMap<String, Network>();
	static Map<String, List<NetworkFeed>> networkFeedsCache = new HashMap<String, List<NetworkFeed>>();
	
	static {
		Network network = new Network();
		network.setPartnerName("COCA COLA");
		network.setName("COCA COLA B2B Network");
		network.setDescription("This network is created by COCA COLA for its partners!");
		network.addPartnerToNetwork("SONY");
		network.addPartnerToNetwork("COCA COLA");
		NetworkInfo info = new NetworkInfo();
		info.setName("B2B Link");
		info.setValue("https://vmb2bctp02/b2b");
		info.setType("link");
		network.addNetworkInfo(info);
		createPartnerNetworkStatic(network);
		String feedId = addFeedStatic(network.getName(), network.getPartnerName(), "Hello partners.. Welcome to B2B!!");
		addFeedStatic(network.getName(), "SONY", "Hi Coca Cola... How are YOu!!");
		
		addFeedCommentStatic(network.getName(), "SONY", feedId, "Thanks Coca Cola! :)");
		addFeedCommentStatic(network.getName(), "SONY", feedId, "Or Sunao...! :)");
	}
	public List<Network> getPartnerNetworks(String partnerName) {
		return new ArrayList<Network>(partnerNetworkCache.get(partnerName));
	}

	public void createPartnerNetwork(Network network) {
		createPartnerNetworkStatic(network);
	}
	public static void createPartnerNetworkStatic(Network network) {
		
		addPartnerNetwork(network.getPartnerName(), network);
		Set<String> partners = network.getPartners();
		for(String partner : partners) {
			addPartnerNetwork(partner, network);
		}
	}
	
	private static void addPartnerNetwork(String partnerName, Network network) {
		Set<Network> list = partnerNetworkCache.get(partnerName);
		if(list ==null) list = new HashSet<Network>();
		list.add(network);
		partnerNetworkCache.put(partnerName, list);
		networkCache.put(network.getName(), network);
	}
	
	public void addPartnerToNetwork(String networkName, String partnerName) {
		Network network = networkCache.get(networkName);
		network.addPartnerToNetwork(partnerName);
		addPartnerNetwork(partnerName, network);
	}

	public Network getNetworkDetails(String networkName) {
		return networkCache.get(networkName);		
	}

	public List<NetworkFeed> getNetworkFeeds(String networkName, int startIndex) {
		List<NetworkFeed> feeds = networkFeedsCache.get(networkName);
		List<NetworkFeed> filteredFeeds = new ArrayList<NetworkFeed>();
		for(int i = feeds.size()-1; i >= startIndex; i--) {
			filteredFeeds.add(feeds.get(i));
		}
		return filteredFeeds;
	}
	
	public void addFeed(String networkName, String partnerName, String feed) {
		addFeedStatic(networkName, partnerName, feed);
	}
	
	public static String addFeedStatic(String networkName, String partnerName, String feed) {
		List<NetworkFeed> feeds = networkFeedsCache.get(networkName);
		if(feeds ==null) feeds = new ArrayList<NetworkFeed>();
		networkFeedsCache.put(networkName, feeds);
		
		NetworkFeed networkFeed = new NetworkFeed(partnerName, feed);
		feeds.add(networkFeed);
		return networkFeed.getFeedId();
	}

	public void addFeedComment(String networkName, String partnerName, String feedId, String comment) {
		addFeedCommentStatic(networkName, partnerName, feedId, comment);
	}
	
	public static void addFeedCommentStatic(String networkName, String partnerName, String feedId, String comment) {
		List<NetworkFeed> feeds = networkFeedsCache.get(networkName);
		if(feeds ==null) return;
		
		NetworkFeed feedObj = null;
		for(NetworkFeed feed : feeds) {
			if(feed.getFeedId().equals(feedId)) {
				feedObj = feed;
				break;
			}
		}
		if(feedObj == null) return;
		feedObj.addComment(partnerName, comment);
	}
}
