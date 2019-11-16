package pmaas.dataservice.model;

import java.util.List;

public class Partner {

	private String id;
	private String name;
	private String organizationUnitName;
	private String title;
	private String subTitle;
	private String about;
	private String businessUnit;
	private List<Address> address;
	private List<Contact> contact;
	private List<IChannel> inChannel;
	private List<IChannel> outChannel;
	private List<INotification> notifications;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSubTitle() {
		return subTitle;
	}

	public void setSubTitle(String subTitle) {
		this.subTitle = subTitle;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBusinessUnit() {
		return businessUnit;
	}

	public void setBusinessUnit(String businessUnit) {
		this.businessUnit = businessUnit;
	}

	public List<Address> getAddress() {
		return address;
	}

	public void setAddress(List<Address> address) {
		this.address = address;
	}

	public List<IChannel> getInChannel() {
		return inChannel;
	}

	public void setInChannel(List<IChannel> inChannel) {
		this.inChannel = inChannel;
	}

	public List<IChannel> getOutChannel() {
		return outChannel;
	}

	public void setOutChannel(List<IChannel> outChannel) {
		this.outChannel = outChannel;
	}

	public List<INotification> getNotifications() {
		return notifications;
	}

	public void setNotifications(List<INotification> notifications) {
		this.notifications = notifications;
	}

	public List<Contact> getContact() {
		return contact;
	}

	public void setContact(List<Contact> contact) {
		this.contact = contact;
	}

	public String getOrganizationUnitName() {
		return organizationUnitName;
	}

	public void setOrganizationUnitName(String organizationUnitName) {
		this.organizationUnitName = organizationUnitName;
	}

}
