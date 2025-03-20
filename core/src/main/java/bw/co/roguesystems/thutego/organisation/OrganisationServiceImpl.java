// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::organisation::OrganisationService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.organisation;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import java.util.Collection;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.springframework.context.MessageSource;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.organisation.OrganisationService
 */
@Service("organisationService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class OrganisationServiceImpl
    extends OrganisationServiceBase
{
    public OrganisationServiceImpl(
        OrganisationDao organisationDao,
        OrganisationRepository organisationRepository,
        MessageSource messageSource
    ) {
        
        super(
            organisationDao,
            organisationRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.organisation.OrganisationService#findById(Long)
     */
    @Override
    protected OrganisationVO handleFindById(Long id)
        throws Exception
    {

        return organisationDao.toOrganisationVO(organisationRepository.findById(id).orElse(null));
    }

    /**
     * @see bw.co.roguesystems.thutego.organisation.OrganisationService#getAll()
     */
    @Override
    protected Collection<OrganisationVO> handleGetAll()
        throws Exception
    {

        return organisationDao.toOrganisationVOCollection(organisationRepository.findAll());
    }

    /**
     * @see bw.co.roguesystems.thutego.organisation.OrganisationService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {

        organisationRepository.deleteById(id);
        return true;
    }

    /**
     * @see bw.co.roguesystems.thutego.organisation.OrganisationService#save(OrganisationVO)
     */
    @Override
    protected OrganisationVO handleSave(OrganisationVO organisation)
        throws Exception
    {

        Organisation entity = organisationDao.organisationVOToEntity(organisation);
        entity = organisationRepository.save(entity);
        return organisationDao.toOrganisationVO(entity);
    }

    /**
     * @see bw.co.roguesystems.thutego.organisation.OrganisationService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<OrganisationVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {

        Specification<Organisation> spec = null;

        if(StringUtils.isNotBlank(criteria)) {

            spec = (root, query, cb) -> cb.or(
                cb.like(cb.lower(root.get("code")), "%" + criteria.toLowerCase() + "%"),
                cb.like(cb.lower(root.get("name")), "%" + criteria.toLowerCase() + "%")
            );
        }

        return organisationDao.toOrganisationVOCollection(organisationRepository.findAll(spec));
    }

}