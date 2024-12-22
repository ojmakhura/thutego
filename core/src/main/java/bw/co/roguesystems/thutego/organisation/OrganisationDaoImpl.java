// Generated by hibernate/SpringHibernateDaoImpl.vsl in andromda-spring-cartridge on $springUtils.date.
// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 */
package bw.co.roguesystems.thutego.organisation;

import bw.co.roguesystems.thutego.curriculum.CurriculumRepository;
import org.springframework.stereotype.Repository;

/**
 * @see Organisation
 */
@Repository("organisationDao")
public class OrganisationDaoImpl
    extends OrganisationDaoBase
{
    
    public OrganisationDaoImpl(
        CurriculumRepository curriculumRepository,
        OrganisationRepository organisationRepository
    ) {

        super(
            curriculumRepository,
            organisationRepository
        );
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void toOrganisationVO(
        Organisation source,
        OrganisationVO target)
    {
        // TODO verify behavior of toOrganisationVO
        super.toOrganisationVO(source, target);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public OrganisationVO toOrganisationVO(final Organisation entity)
    {
        // TODO verify behavior of toOrganisationVO
        return super.toOrganisationVO(entity);
    }

    /**
     * Retrieves the entity object that is associated with the specified value object
     * from the object store. If no such entity object exists in the object store,
     * a new, blank entity is created
     */
    private Organisation loadOrganisationFromOrganisationVO(OrganisationVO organisationVO)
    {
        // TODO implement loadOrganisationFromOrganisationVO
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.organisation.loadOrganisationFromOrganisationVO(OrganisationVO) not yet implemented.");

        /* A typical implementation looks like this:
        if (organisationVO.getId() == null)
        {
            return  Organisation.Factory.newInstance();
        }
        else
        {
            return this.load(organisationVO.getId());
        }
        */
    }

    /**
     * {@inheritDoc}
     */
    public Organisation organisationVOToEntity(OrganisationVO organisationVO)
    {
        // TODO verify behavior of organisationVOToEntity
        Organisation entity = this.loadOrganisationFromOrganisationVO(organisationVO);
        this.organisationVOToEntity(organisationVO, entity, true);
        return entity;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void organisationVOToEntity(
        OrganisationVO source,
        Organisation target,
        boolean copyIfNull)
    {
        // TODO verify behavior of organisationVOToEntity
        super.organisationVOToEntity(source, target, copyIfNull);
    }
}