package pmaas.dataservice.model.network;

import java.util.ArrayList;
import java.util.List;

import pmaas.dataservice.util.RandomIDGenerator;

public class NetworkFeed {
	private final String feedId;
	private final String partnerName;
	private final String feed;
	private List<Comment> comments = new ArrayList<Comment>();
	
	public NetworkFeed(String partnerName, String feed) {
		this.partnerName = partnerName;
		this.feed = feed;
		this.feedId = RandomIDGenerator.getAlphaNumericString(21);
	}

	public class Comment{
		private final String partnerName;
		private final String comment;
		public Comment(String partnerName, String comment) {
			this.partnerName = partnerName;
			this.comment = comment;
		}
		public String getPartnerName() {
			return partnerName;
		}
		public String getComment() {
			return comment;
		}
		
	}
	
	public void addComment(String partnerName, String comment) {
		Comment commentObj = new Comment(partnerName, comment);
		comments.add(commentObj);
	}
	
	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public String getPartnerName() {
		return partnerName;
	}

	public String getFeed() {
		return feed;
	}

	public String getFeedId() {
		return feedId;
	}
	
}
