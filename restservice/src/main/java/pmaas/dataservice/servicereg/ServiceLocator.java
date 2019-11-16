package pmaas.dataservice.servicereg;

import java.util.HashMap;
import java.util.Map;

public class ServiceLocator {
	public static final String MONGO_DB_CLIENT = "MongoClient";
	public static final String BLOG_SERVICE = "BlogService";

	private static Map<String, Object> registry = new HashMap<String, Object>();

	public static Object getResource(String key) {
		return registry.get(key);
	}

	public static Object putResource(String key, Object resource) {
		return registry.put(key, resource);
	}

}
