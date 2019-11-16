package pmaas.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import pmaas.dataservice.model.Partner;
import pmaas.dataservice.service.PMaasImpl;

@Path("/service")
public class PMaasApis {
	PMaasImpl serviceImpl = new PMaasImpl();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Partner> getAllPartners() {
		System.out.println("Inside getAllPartners");
		return serviceImpl.getPartners();
	}

	@Path("{partnerId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Partner getPartner(@PathParam("partnerId") String partnerId) {
		return serviceImpl.getPartnerDetails(partnerId);
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_HTML)
	public Response createPartner(Partner partner) {
		serviceImpl.createNewParter(partner);
		return Response.ok(partner.getName()).build();

	}

}
