// Generated by hibernate/SpringHibernateDaoImpl.vsl in andromda-spring-cartridge on $springUtils.date.
// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 */
package bw.co.roguesystems.thutego.curricullum.domain;

import bw.co.roguesystems.thutego.curricullum.CurricullumRepository;
import org.springframework.stereotype.Repository;

/**
 * @see Domain
 */
@Repository("domainDao")
public class DomainDaoImpl
    extends DomainDaoBase
{
    
    public DomainDaoImpl(
        CurricullumRepository curricullumRepository,
        DomainRepository domainRepository
    ) {

        super(
            curricullumRepository,
            domainRepository
        );
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void toDomainVO(
        Domain source,
        DomainVO target)
    {
        // TODO verify behavior of toDomainVO
        super.toDomainVO(source, target);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public DomainVO toDomainVO(final Domain entity)
    {
        // TODO verify behavior of toDomainVO
        return super.toDomainVO(entity);
    }

    /**
     * Retrieves the entity object that is associated with the specified value object
     * from the object store. If no such entity object exists in the object store,
     * a new, blank entity is created
     */
    private Domain loadDomainFromDomainVO(DomainVO domainVO)
    {
        if (domainVO.getId() == null)
        {
            return  Domain.Factory.newInstance();
        }
        else
        {
            return this.load(domainVO.getId());
        }
    }

    /**
     * {@inheritDoc}
     */
    public Domain domainVOToEntity(DomainVO domainVO)
    {
        // TODO verify behavior of domainVOToEntity
        Domain entity = this.loadDomainFromDomainVO(domainVO);
        this.domainVOToEntity(domainVO, entity, true);
        return entity;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void domainVOToEntity(
        DomainVO source,
        Domain target,
        boolean copyIfNull)
    {
        // TODO verify behavior of domainVOToEntity
        super.domainVOToEntity(source, target, copyIfNull);
    }
}