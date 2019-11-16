package pmaas.dataservice.util;

public class CommonUtil {
	public static final String PARTNER_COLLECTION = "partner";
	public static final String BLOG_DATABASE = "pmaas";
	public static final String FLD_ID = "partnerId";
	public static final String FLD_PARTNER_DESC= "description";
	public static final String FLD_PARTNER_NAME= "name";
	public static final String FLD_PARTNER_BUSINESS_UNIT= "businessunit";
	public static boolean isNotEmpty(String value) {
		return value != null && !value.equals("");
	}

}


