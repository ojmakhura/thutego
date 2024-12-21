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
import org.springframework.context.MessageSource;
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
        // TODO implement protected  OrganisationVO handleFindById(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.organisation.OrganisationService.handleFindById(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.organisation.OrganisationService#getAll()
     */
    @Override
    protected Collection<OrganisationVO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<OrganisationVO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.organisation.OrganisationService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.organisation.OrganisationService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.organisation.OrganisationService.handleRemove(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.organisation.OrganisationService#save(OrganisationVO)
     */
    @Override
    protected OrganisationVO handleSave(OrganisationVO organisation)
        throws Exception
    {
        // TODO implement protected  OrganisationVO handleSave(OrganisationVO organisation)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.organisation.OrganisationService.handleSave(OrganisationVO organisation) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.organisation.OrganisationService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<OrganisationVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        // TODO implement protected  Collection<OrganisationVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.organisation.OrganisationService.handleSearch(String criteria, Set<PropertySearchOrder> orderings) Not implemented!");
    }

}