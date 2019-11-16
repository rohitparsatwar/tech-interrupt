package pmaas.dataservice.model;

public class IChannel {

	private String host;
	private String port;
	private String username;
	private String password;

	public String getHost() {
		return host;
	}

	public void setHost(String host) {
		this.host = host;
	}

	public String getPort() {
		return port;
	}

	public void setPort(String port) {
		this.port = port;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public IChannel(String host, String port, String username, String password, String url) {
		super();
		this.host = host;
		this.port = port;
		this.username = username;
		this.password = password;
		this.url = url;
	}

	private String url;
}
