package pmaas.dataservice.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import pmaas.dataservice.model.Address;
import pmaas.dataservice.model.Contact;
import pmaas.dataservice.model.IChannel;
import pmaas.dataservice.model.Partner;

public class PMaasImpl {

	private static List<Partner> partnerCache = new ArrayList<>();
	static {
		Partner cocacola = new Partner();
		cocacola.setName("COCA COLA");
		cocacola.setTitle("The Coca-Cola Company");
		cocacola.setBusinessUnit("Beverages Unit");
		Address cocaColaAddress = new Address("North Avenue", "Luckie Street");
		cocaColaAddress.setState("Georgia");
		cocaColaAddress.setCity("Atlanta");
		cocaColaAddress.setPostalCode("100002");
		cocaColaAddress.setCountry("USA");
		cocacola.setAddress(Arrays.asList(cocaColaAddress));
		Contact cocaColaContact = new Contact();
		cocaColaContact.setContactType("primary");
		cocaColaContact.setRole("admin");
		cocaColaContact.setFirstName("Tony");
		cocaColaContact.setLastName("Stark");
		cocaColaContact.setTelephone("9709098098098");
		cocaColaContact.setEmail("contact@cocacola.com");
		cocaColaContact.setCountry("USA");
		IChannel channel = new IChannel("http", "4100", "cocacolauser", "cocacolapassword",
				"www.cocacola.com\\endpoint\\cocacola");
		cocacola.setInChannel(Arrays.asList(channel));
		cocacola.setContact(Arrays.asList(cocaColaContact));
		cocacola.setSubTitle("Food & Beverages  Atlanta, GA - 3,328,285 followers");
		cocacola.setBusinessUnit("Food and Beverages");
		cocacola.setAbout(
				"The Coca-Cola Company (NYSE: KO) is a total beverage company, offering over 500 brands in more than 200 countries and territories.\r\n"
						+ "\r\n"
						+ "In addition to the company’s Coca-Cola brands, our portfolio includes some of the world’s most valuable beverage brands, such as AdeS soy-based beverages, Ayataka green tea, Dasani waters, Del Valle juices and nectars, Fanta, Georgia coffee, Gold Peak teas and coffees, Honest Tea, innocent smoothies and juices, Minute Maid juices, Powerade sports drinks, Simply juices, smartwater, Sprite, vitaminwater and ZICO coconut water.\r\n"
						+ "\r\n"
						+ "We’re constantly transforming our portfolio, from reducing sugar in our drinks to bringing innovative new products to market. We’re also working to reduce our environmental impact by replenishing water and promoting recycling. With our bottling partners, we employ more than 700,000 people, helping bring economic opportunity to local communities worldwide.\r\n"
						+ "\r\n"
						+ "Learn more at Coca-Cola Journey at www.coca-colacompany.com and follow us on Twitter (@CocaColaCo), Instagram (@thecocacolaco), Facebook (@thecocacolaco) and LinkedIn.");
		partnerCache.add(cocacola);

		Partner profile = new Partner();
		profile.setName("SONY");
		profile.setTitle("Sony Electronics");
		profile.setSubTitle("Consumer Electronics  North America, CA  243,120 followers");
		profile.setAbout("WE ARE SONY\r\n" + "\r\n"
				+ "Our spirit of innovation and challenge has created those special moments that make people say ‘wow’.\r\n"
				+ "\r\n" + "How? By harnessing the world’s most powerful source of creativity: our people.\r\n" + "\r\n"
				+ "Because ‘wow’ experiences are never a product of processes or procedures. They’re only made possible by liberating the passion and potential of the truly talented to do what excites them most.\r\n"
				+ "So at Sony, you can turn your personal passions into meaningful innovations through the brave risk-taking, smart collaboration and boundless curiosity of your local team.\r\n"
				+ "\r\n"
				+ "And you can also realize your full professional potential as part of an ambitious global company with the power and reach to touch people’s everyday lives. Including yours.\r\n"
				+ "Together, let’s make the world say wow.\r\n" + "\r\n"
				+ "We are a global organization and seek individuals from a variety of generations, socioeconomic and educational backgrounds, and sexual orientations. Our employees are courageous, unique and diverse. They’re comfortable expressing their thoughts and opinions freely, and possess an unwavering passion and pride to deliver exceptional experiences to our customers.  \r\n"
				+ "\r\n"
				+ "See what our employees are saying about their life at Sony by checking out the hashtag #TeamSony online. If you'd like to join our team,  visit www.sonyjobs.com or our Global Careers page at http://www.sony.net/SonyInfo/Careers.");
		profile.setBusinessUnit("Electronics");
		partnerCache.add(profile);
		
		profile = new Partner();
		profile.setName("7ELEVEN");
		profile.setTitle("7-Eleven Worldwide");
		profile.setSubTitle("Retail  Richmond, VIC  19,918 followers");
		profile.setAbout("7-Eleven Stores Pty Ltd, Australia’s first choice in convenience, is a private company owned by the Withers and Barlow family.  The company has a license to operate and franchise 7-Eleven stores in Australia from the US based 7-Eleven Inc.  \r\n" + 
				"\r\n" + 
				"The first Australian store was opened in August 1977.  Today 7-Eleven Stores Pty Ltd. operates more than 670 stores in Queensland, New South Wales, Victoria, the Australian Capital Territory, and Western Australia. \r\n" + 
				"\r\n" + 
				"Through its store network, 7-Eleven Stores Pty Ltd. conducts more than 228 million transactions a year, serving an average seven customers per second, generating sales approaching $4 billion.");
		profile.setBusinessUnit("Retail");
		partnerCache.add(profile);

	}

	public List<Partner> getPartners() {
		return partnerCache;
	}

	public Partner getPartnerDetails(String partnerName) {
		for (Partner partner : partnerCache) {
			if (partner.getName().equals(partnerName)) {
				return partner;
			}
		}
		return null;
	}

	public void createNewParter(Partner partner) {
		partnerCache.add(partner);
	}

}
