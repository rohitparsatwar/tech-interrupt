package pmaas.dataservice.model.network;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Network {
	private String partnerName;
	private String name;
	private String description;
	private List<NetworkInfo> infoList = new ArrayList<NetworkInfo>();
	private Set<String> partners = new HashSet<String>();
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPartnerName() {
		return partnerName;
	}

	public void setPartnerName(String partnerName) {
		this.partnerName = partnerName;
	}

	public Set<String> getPartners() {
		return partners;
	}

	public void setPartners(Set<String> partners) {
		this.partners = partners;
	}

	public boolean addPartnerToNetwork(String partnerName) {
		return this.partners.add(partnerName);
	}
	
	public List<NetworkInfo> getNetworkInfo() {
		return infoList;
	}

	public void setNetworkInfo(List<NetworkInfo> infoList) {
		this.infoList = infoList;
	}
	
	public void addNetworkInfo(NetworkInfo info) {
		this.infoList.add(info);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Network other = (Network) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
	
	public static class NetworkInfo{
		private String name;
		private String value;
		private String type;
		
		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getValue() {
			return value;
		}

		public void setValue(String value) {
			this.value = value;
		}

		public String getType() {
			return type;
		}

		public void setType(String type) {
			this.type = type;
		}
		
	}
}
