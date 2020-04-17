<?php

namespace Ybank;

/**
 * Interface RepositoryInterface
 * @package YBank
 */
interface BaseRepositoryInterface
{
    /**
     * Finds a specific record by its id
     *
     * @param $id
     */
    public function findById($id);
}
