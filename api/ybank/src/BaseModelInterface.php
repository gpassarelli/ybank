<?php


namespace Ybank;


interface BaseModelInterface
{
    /**
     * Validates current attributes against rules
     */
    public function validate();

    /**
     * Retrieve error message bag
     */
    public function getErrors();

    /**
     * Inverse of wasSaved
     */
    public function hasErrors();
}
